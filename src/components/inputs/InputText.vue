<template>
  <label class="input-text" :class="props.error">
    <span v-if="props.title"
          class="input-text__title">
      {{ props.title }}
    </span>
    <input class="input-text__input"
           :type="props.type || 'text'"
           @input="$emit('update:modelValue', $event.target.value)"
           :value="props.modelValue">
    <small class="input-text__max" v-if="props.maxlength">
      {{ `${props.modelValue ? props.modelValue.length : 0}/${props.maxlength}` }}
    </small>
    <small class="input-text__error" v-if="props.error">
      {{ props.error }}
    </small>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name?: string
  title?: string
  error?: string
  modelValue?: string
  icon?: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'url'
  placeholder?: string
  minlength?: number
  maxlength?: number
  pattern?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string
}

const props = defineProps<Props>()

const name         = computed(() => props.name || null )
const title        = computed(() => props.title || null )
const error        = computed(() => props.error || null )
const modelValue   = computed(() => props.modelValue || null )
const icon         = computed(() => props.icon || null )
const type         = computed(() => props.type || null )
const placeholder  = computed(() => props.placeholder || null )
const minlength    = computed(() => props.minlength || null )
const maxlength    = computed(() => props.maxlength || null )
const pattern      = computed(() => props.pattern || null )
const disabled     = computed(() => props.disabled || null )
const required     = computed(() => props.required || null )
const autocomplete = computed(() => props.autocomplete || null )

</script>

<style lang="scss" scoped>
.input-text {
  display:    flex;
  position:   relative;
  max-width:  100%;
  &__input {
    appearance:    none;
    padding:       3px 6px;
    min-width:     128px;
    width:         128px;
    max-width:     100%;
    height:        24px;
    background-color: var(--field-background);
    border:        var(--field-border);
    border-radius: 1px;
    outline:       var(--field-outline);
    &:focus {
      border: var(--field-border-focused);
      outline: var(--field-outline-focused);
    }
  }
  &__max {
    position: absolute;
    right: 6px;
    top:   4px;
  }
  &__error {
    color: var(--error);
    // top: calc(100% + 2px);
    font-weight: 400;
  }
  &.Error {
    & > .input-text__input {
      color:   var(--error);
      border:  var(--field-border-validated);
      outline: var(--field-outline-validated);
    }
  }
}
</style>
