<template>
  <button class="main-bar-button">
    <img
      src=""
      alt=""
    >
    <span class="main-bar-button__name"> {{ props.tool.name }} </span>
  </div>
</template>

<script setup lang="ts">

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
