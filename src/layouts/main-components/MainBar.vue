<template>
  <nav
    class="main-bar"
    :class="`main-bar_${props.position}`"
  >
    <div class="main-bar__left">
      <slot name="bar_left" />
    </div>
    <div class="main-bar__right">
      <slot name="bar_right" />
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ position: 'top' | 'bottom' | 'left' | 'right' }>()
</script>

<style lang="scss" scoped>
.main-bar {
  display:          flex;
  justify-content:  space-between;
  background-color: var(--panel-background);
  grid-area:        bar;
  border-color:     var(--panel-border);
  border-style:     solid;
  border-width:     0;
  overflow:         auto;
  scrollbar-width:  none;

  &::-webkit-scrollbar {
    display: none;
  }

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
