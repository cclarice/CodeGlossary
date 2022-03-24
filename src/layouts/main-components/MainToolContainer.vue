<template>
  <aside
    class="main-tool"
    :class="`main-tool_${position}`"
  >
    <div class="main-tool__wrapper">
      <div class="main-tool__left">
        <slot name="tool_left" />
      </div>
      <div class="main-tool__splitter" />
      <div class="main-tool__right">
        <slot name="tool_right" />
      </div>
    </div>
    <div class="main-tool__resizer" />
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  position: 'top' | 'bottom' | 'left' | 'right'
}>()
</script>

<style lang="scss" scoped>

</style>
