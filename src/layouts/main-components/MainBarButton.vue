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
  topRight: { x: 0, y: 0 },
  topLeft: { x: 0, y: 0 },
  leftRight: { x: 0, y: 0 },
  leftLeft: { x: 0, y: 0 },
  rightRight: { x: 0, y: 0 },
  rightLeft: { x: 0, y: 0 },
  bottomRight: { x: 0, y: 0 },
  bottomLeft: { x: 0, y: 0 }
}
let width = 0
let height = 0

onMounted(() => {
  for (let i = 0; document.body.children.item(i); i++) {
    if (document.body.children.item(i)?.id === 'droparea' && document.body.children.item(i) instanceof HTMLElement) {
      droparea.value = document.body.children.item(i) as HTMLElement
    }
  }
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
  points.topRight.y = points.topLeft.y = 29
  points.topLeft.x = width * 0.25

  points.rightRight.x = points.rightLeft.x = width
  points.rightRight.y = height * 0.75
  points.rightLeft.y = height * 0.25

  points.bottomRight.x = width * 0.75
  points.bottomRight.y = points.bottomLeft.y = height - 20
  points.bottomLeft.x = width * 0.25

  points.leftRight.y = height * 0.25
  points.leftLeft.y = height * 0.75
}

const drag = (event: Event) => {
  if (droparea.value) {
    const dragPosition = getDragPosition(event as DragEvent)
    tools.displayPhantom(dragPosition, props.tool.name)
    droparea.value.style.clipPath = dropareas[dragPosition]
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

const getDragPosition = (event: DragEvent): ToolPlace => {
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

// const getDragOrder = (event: DragEvent, position): number => {
//   return 0 // todo
// }

const dragend = (event: DragEvent) => {
  tools.moveTool(props.tool, getDragPosition(event))
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
