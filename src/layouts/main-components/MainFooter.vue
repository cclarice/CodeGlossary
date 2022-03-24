<template>
  <footer
    class="main-footer"
    :class="{ 'main-footer_slotted': hasSlot }"
  >
    <slot />
    <nav class="main-footer__left">
      left
    </nav>
    <nav class="main-footer__status">
      status
    </nav>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  hasSlot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.main-footer {
  display: flex;
  justify-content: space-between;
  background-color: var(--panel-border);
  min-height: 20px;
  padding-top: 1px;

  &_slotted {
    display: grid;
    grid-template-rows: 21px 20px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "bar bar"
                         "left status";
    row-gap: 1px;
    padding: 0;
  }
}

.main-footer__left, .main-footer__status {
  display: flex;
  flex: 1;
  background-color: var(--panel-background);
  align-items: center;
  grid-row: 1;
}

.main-footer__left {
  grid-area: left;
}

.main-footer__status {
  flex-flow: row-reverse;
  grid-column: 2;
  grid-area: status;
}
</style>
