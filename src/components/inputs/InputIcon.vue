<template>
  <div
    class="input-icon"
    :class="{ disabled: props.disabled, color: props.color }"
    @click="$emit('i-click')"
  >
    <div class="input-icon__detail">
      <img
        class="input-icon__icon"
        :src="props.icon"
        alt=""
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  active?: boolean
  disabled?: boolean
  color?: boolean
}

defineEmits(['i-click'])

const props =
  defineProps<Props>()
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
