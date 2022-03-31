<template>
  <div
    v-show="visible"
    class="main-bar-button"
    :class="{ 'main-bar-button_phantom': props.tool.id === -1 }"
    draggable="true"
    @dragstart.stop="dragstart"
    @dragend="dragend"
  >
    <img
      v-if="props.tool.icon"
      class="main-bar-button__icon"
      :src="props.tool.icon"
      draggable="false"
      alt=""
    >
    <div
      v-else
      style="width: 13px; height: 13px"
    />
    <span class="main-bar-button__name"> {{ props.tool.name }} </span>
  </div>
</template>

<script setup lang="ts">
import { Tool, ToolPlace } from '@/models/Tool'
import { onMounted, onUnmounted, ref } from 'vue'
import { useTools } from '@/stores/tool'
import dropareas from '@/consts/dropareas'

interface Props {
  tool: Tool
}

const visible = ref(true)
const tools = useTools()
const props = defineProps<Props>()
const droparea = ref<HTMLElement | null>(null)
const points = {
  topLeft: { x: 0, y: 0, s: 0, h: true, a: true },
  topRight: { x: 0, y: 0, s: 0, h: true, a: false },
  leftLeft: { x: 0, y: 0, s: 0, h: false, a: false },
  leftRight: { x: 0, y: 0, s: 0, h: false, a: true },
  rightLeft: { x: 0, y: 0, s: 0, h: false, a: true },
  rightRight: { x: 0, y: 0, s: 0, h: false, a: false },
  bottomLeft: { x: 0, y: 0, s: 0, h: true, a: true },
  bottomRight: { x: 0, y: 0, s: 0, h: true, a: false }
}
let width = 0
let height = 0

onMounted(() => {
  droparea.value = document.getElementById('droparea')
  window.addEventListener('resize', setPositions)
  setPositions()
})

onUnmounted(() => {
  window.removeEventListener('resize', setPositions)
})

const setPositions = () => {
  width = window.innerWidth
  height = window.innerHeight
  points.topRight.x = width * 0.75
  points.topRight.y = points.topLeft.y = 39
  points.topLeft.x = width * 0.25

  points.rightRight.x = points.rightLeft.x = width
  points.rightRight.y = height * 0.75
  points.rightLeft.y = height * 0.25

  points.bottomRight.x = width * 0.75
  points.bottomRight.y = points.bottomLeft.y = height - 30
  points.bottomLeft.x = width * 0.25

  points.leftRight.y = height * 0.25
  points.leftLeft.y = height * 0.75

  points.topRight.s = points.bottomRight.s = width
  points.leftRight.s = points.rightLeft.s = 39
  points.leftLeft.s = points.rightRight.s = height - 30
}

const mediumSize = 82

const getDragOrder = (event: DragEvent, place: ToolPlace): number => {
  const context = points[place]
  const buttons = tools.buttons[place]
  let pos = context.a ? context.s + mediumSize : context.s - mediumSize
  let mPos = context.h ? event.pageX : event.pageY
  let i = 0
  if (context.a) {
    for (; buttons[i]; i++) {
      if (pos > mPos || !buttons[i + 1]) {
        return i
      }
      pos += mediumSize
    }
  } else {
    for (; buttons[i]; i++) {
      if (pos < mPos || !buttons[i + 1]) {
        return i
      }
      pos -= mediumSize
    }
  }
  return -1
}

const getDragPlace = (event: DragEvent): ToolPlace => {
  let lengths: { place: ToolPlace, length: number }[] = []
  for (const place in points) {
    const point: { x: number, y: number } = points[place as ToolPlace]
    const length = Math.sqrt(Math.pow(point.x - event.pageX, 2) + Math.pow((point.y - event.pageY), 2))
    lengths.push({
      place: place as ToolPlace,
      length: place.includes('top') || place.includes('bottom') ? length * (height / width) : length
    })
  }

  return lengths.sort((c, p) => {
    if (c.length < p.length) {
      return -1
    } else if (c.length > p.length) {
      return 1
    }
    return 0
  })[0].place
}

const drag = (event: Event) => {
  if (droparea.value) {
    const dragPlace = getDragPlace(event as DragEvent)
    tools.displayPhantom(dragPlace, props.tool.name, getDragOrder(event as DragEvent, dragPlace))
    droparea.value.style.clipPath = dropareas[dragPlace]
    if (droparea.value.style.display !== 'block') {
      droparea.value.style.display = 'block'
    }
  }
  window.requestAnimationFrame(() => {
    if (event.target) {
      window.addEventListener('dragover', drag, { once: true })
    }
  })
}

const dragstart = (event: DragEvent) => {
  if (event.dataTransfer) {
    event.dataTransfer.items.add(`${props.tool.name}`, 'draggable/tool')
    event.dataTransfer.dropEffect = 'move'
  }
  window.requestAnimationFrame(() => {
    visible.value = false
    if (event.target) {
      window.addEventListener('dragover', drag, { once: true })
    }
  })
}

const dragend = (event: DragEvent) => {
  const dragPlace = getDragPlace(event as DragEvent)
  tools.moveTool(props.tool, dragPlace, getDragOrder(event as DragEvent, dragPlace))
  if (droparea.value) {
    droparea.value.style.display = 'none'
  }
  window.removeEventListener('dragover', drag)
  visible.value = true
}
</script>

<style lang="scss" scoped>
.main-bar-button {
  display:          flex;
  align-items:      center;
  gap:              4px;
  background-color: transparent;
  user-select:      none;

  &:hover {
    background-color: var(--stripe-hovered-background);
  }

  .active {
    background-color: var(--stripe-selected-background);
  }

  &__icon {
    filter: var(--icon-filter);
    user-select: none;
  }

  &_phantom {
    background-color: var(--default);
    opacity: 0.25;
  }
}
</style>
