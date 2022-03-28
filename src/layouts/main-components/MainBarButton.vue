<template>
  <div
    class="main-bar-button"
    draggable="true"
    @dragstart.stop="drag"
  >
    <img
      v-if="props.tool.icon"
      class="main-bar-button__icon"
      :src="props.tool.icon"
      draggable="false"
      alt=""
    >
    <span class="main-bar-button__name"> {{ props.tool.name }} </span>
  </div>
</template>

<script setup lang="ts">
import { Tool } from '@/models/Tool'

interface Props {
  tool: Tool
}

const props = defineProps<Props>()

const drag = (event: DragEvent) => {
  if (event.dataTransfer) {
    event.dataTransfer.items.add(`${props.tool.name}`, 'draggable/tool')
  }
}
</script>

<style lang="scss" scoped>
.main-bar-button {
  display:          flex;
  align-items:      center;
  gap:              4px;
  background-color: transparent;
  user-select: none;

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
}
</style>
