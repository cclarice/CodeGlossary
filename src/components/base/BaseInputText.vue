<!-- eslint-disable -->
<template>
  <input type="text"
         :value="modelValue" @input="changeValue($event.target.value)"
         :style="{ width: typeof width === 'string' ? width : `${width}px` }"
         :disabled="disabled"
         :maxlength="maxlength"
         :placeholder="placeholder"
         :class="{ invalid: !validated }">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInputText',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: '64px'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    validated: {
      type: Boolean,
      default: true
    },
    maxlength: {
      type: [Boolean, Number],
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  methods: {
    changeValue (value: string) {
      this.$emit('update:modelValue', value)
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  appearance: none;
  border: 1px solid;
  background-color: var(--field-background);
  border-color: var(--field-border);
  margin: 6px 0;
  padding: 4px 7px;
  height: 24px;
  min-width: 64px;
  outline: none;
  &::placeholder {
    color: var(--disabled);
  }
  &:disabled {
    color: var(--disabled);
    background-color: var(--field-disabled);
    border-color: var(--field-border-disabled);
    user-focus: none;
    user-input: none;
    outline: none;
  }
  &:focus {
    border-color: var(--focus-border);
    outline: 2px solid var(--focus-outline);
  }
  &.invalid {
    border-color: var(--field-border-error);
    outline: 2px solid var(--field-outline-error);
  }
}
</style>