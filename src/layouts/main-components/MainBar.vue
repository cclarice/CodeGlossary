<template>
  <nav
    class="main-bar"
    :class="`main-bar_${props.position}`"
  >
    <div
      class="main-bar__left"
      @dragover="dragoverLeft"
      @drop="dropLeft"
    >
      <slot name="bar_left" />
    </div>
    <div
      class="main-bar__right"
      @dragover="dragoverRight"
      @drop="dropRight"
    >
      <slot name="bar_right" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTools } from '@/stores/tool'
import { ToolPlace } from '@/models/Tool'

const props = defineProps<{ position: 'top' | 'bottom' | 'left' | 'right' }>()

const tools = useTools()
const dragover = (side: 'Left' | 'Right') => (event: DragEvent) => {
  if (event.dataTransfer && event.dataTransfer.items[0].type === 'draggable/tool') {
    event.preventDefault()
    displayToolPosition(props.position + side)
    event.dataTransfer.dropEffect = 'move'
  }
}
const dragoverRight = dragover('Right')
const dragoverLeft = dragover('Left')
const displayToolPosition = (position: string) => {
  console.log(position)
}

const drop = (side: string) => (event: DragEvent) => {
  if (event.dataTransfer && event.dataTransfer.items[0].type === 'draggable/tool') {
    event.dataTransfer.items[0].getAsString((data) => {
      console.log(`${props.position}${side} ${data}`)
      tools.moveTool(data, (props.position + side) as ToolPlace)
    })
  }
}
const dropLeft = drop('Left')
const dropRight = drop('Right')

</script>

<style lang="scss" scoped>
.main-bar {
  display:          flex;
  justify-content:  space-between;
  background-color: var(--panel-background);
  // height: 100%;
  grid-area:        bar;
  border-color:     var(--panel-border);
  border-style:     solid;
  border-width:     0;

  &_top {
    width:               100%;
    border-bottom-width: 1px;
  }

  &_top, &_bottom {
    &:deep(.main-bar-button) {
      height: 100%;
      padding: 0 10px;
    }
  }

  &_left, &_right {
    width:             21px;
    border-left-width: 1px;
    writing-mode:      vertical-rl;

    &:deep(.main-bar-button) {
      width: 100%;
      padding: 10px 0;
    }
  }

  &_left {
    transform: rotate(180deg);
    &:deep(.main-bar-button__icon) {
      transform: rotate(180deg);
    }
  }

  &_bottom {
    border-top-width: 1px;
  }

  &__left,
  &__right {
    display: flex;
    flex-grow: 1;
  }

  &__right {
    flex-flow: row-reverse;
  }
}
</style>
