<template>
  <button @click="$emit('onClick')" :class="'BaseButton' + type" :style="{ width: typeof width === 'string' ? width : `${width}px` }" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type:     String,
      required: true
    },
    type: {
      type:     String,
      default:  'Regular'
    },
    disabled: {
      type:     Boolean,
      default:  false
    },
    width: {
      type:     [Number, String],
      default:  '72px'
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  height: 24px;
  min-width: 72px;
  padding: 4px 12px;
  background-color: var(--button-background);
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: var(--button-border);
  font-weight: 500;
  margin: 6px 0;
  user-select: none;
  &.BaseButtonDefault {
    background-color: var(--button-default);
    border-color:     var(--button-default-border);
    color:            var(--button-default-color);
  }
  &:focus,
  &:active {
    outline: 2px solid var(--button-focus-outline);
    border-color: var(--focus-border);
  }
  &[disabled] {
    background-color: var(--button-background-disabled);
    color: var(--disabled);
    user-focus: none;
    user-input: none;
    outline: none;
  }
}
</style>