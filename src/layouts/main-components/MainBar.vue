<template>
  <nav class="main-bar" :class="`main-bar_${position}`">
    <div class="main-bar__left">
      <slot name="bar_left"></slot>
    </div>
    <div class="main-bar__right">
      <slot name="bar_right"></slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  position: 'top' | 'bottom' | 'left' | 'right'
}>()
</script>

<style lang="scss" scoped>
.main-bar {
  display: flex;
  background-color: var(--panel-background);
  height: 100%;
  grid-area: bar;
  border-color: var(--panel-border);
  border-style: solid;
  border-width: 0;

  &_top {
    width: 100%;
    border-bottom-width: 1px;
  }
  &_left, &right {
    width: 21px;
    border-right-width: 1px;
  }
  &_left {
    border-right-width: 1px;
  }
  &_right {
    border-left-width: 1px;
  }
  &_bottom {
    border-top-width: 1px;
  }
}
</style>
