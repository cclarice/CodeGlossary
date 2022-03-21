<template>
  <div class="input-icon" @click="$emit('i-click')" :class="{ disabled, color }">
    <div class="input-icon__detail">
      <img class="input-icon__icon" :src="icon" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['i-click'])
const { icon, active = false, disabled = false, color = false } =
  defineProps<{ icon: string, active?: boolean, disabled?: boolean, color?: boolean }>()
</script>

<style lang="scss" scoped>
.input-icon {
  display:         flex;
  justify-content: center;
  align-items:     center;
  width:           26px;
  height:          26px;
  cursor:          pointer;

  &__detail {
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 3px;
    width: 22px;
    height: 22px;
    padding: 3px;
  }

  &:not(.disabled):hover > &__detail {
    background-color: var(--icon-hovered-background);
  }

  &:not(.disabled):active > &__detail {
    background-color: var(--icon-pressed-background);
  }

  &__icon {
    transition: filter .2s;
    filter: var(--icon-filter); // todo filters
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }

  &.color > &__icon {
    filter: none;
  }

  &__icon.disabled {
    opacity: .5
  }
}
</style>
