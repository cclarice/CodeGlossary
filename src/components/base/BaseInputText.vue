<!-- eslint-disable -->
<template>
  <input :value="value" @input="changeValue($event.target.value)"
         :style="{ width: typeof width === 'string' ? width : `${width}px` }"
         :disabled="disabled"
         :maxlength="maxlength">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInputText',
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: '150px'
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
    }
  },
  emits: ['update:value'],
  methods: {
    changeValue (value: string) {
      this.$emit('update:value', value)
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
  outline: none;
}
</style>