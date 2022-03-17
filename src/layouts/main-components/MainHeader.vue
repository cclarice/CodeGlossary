<template>
  <header class="main-header" :class="{ 'main-header_slotted': slots.default }">
    <nav class="main-header__path">
      path
    </nav>
    <nav class="main-header__actions">
      actions
    </nav>
    <slot>

    </slot>
  </header>
</template>

<script setup lang="ts">
import { onMounted, useSlots } from 'vue'

const slots = useSlots()

onMounted(() => {
  console.log(slots.default)
})
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  background-color: var(--panel-border);

  &_slotted {
    display: grid;
    grid-template-rows: 29px 21px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "path actions"
                         "bar bar";
    row-gap: 1px;
  }
}

.main-header__actions, .main-header__path {
  display: flex;
  flex: 1;
  background-color: var(--panel-background);
  align-items: center;
  grid-row: 1;
}

.main-header__actions {
  flex-flow: row-reverse;
  grid-column: 2;
}
</style>
