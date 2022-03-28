<template>
  <label
    class="input-text"
    :class="{ error: props.error || (props.max && props.modelValue && props.modelValue.length > props.max) }"
  >
    <span
      v-if="props.label"
      class="input-text__label"
    >
      {{ props.label }}
    </span>
    <small
      v-if="props.max"
      class="input-text__max"
    >
      {{ `${props.modelValue ? props.modelValue.length : 0}/${props.max}` }}
    </small>
    <input
      class="input-text__input"
      :type="props.type || 'text'"
      :value="props.modelValue"
      :disabled="props.disabled"
      :maxlength="props.max"
      @input="updateModel"
    >
    <transition name="error">
      <small
        v-if="props.error"
        class="input-text__error"
      >
        {{ props.error || '_' }}
      </small>
    </transition>
  </label>
</template>

<script setup lang="ts">

interface Props {
  name?: string
  label?: string
  error?: string
  modelValue?: string
  icon?: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'url'
  placeholder?: string
  min?: number
  max?: number
  pattern?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const updateModel = (event: Event): void => emit('update:modelValue', (event.target as HTMLInputElement).value)
</script>

<style lang="scss" scoped>
.input-text {
  display:   flex;
  flex-flow: column;
  position:  relative;
  min-width: 128px;
  width:     128px;

  &__input {
    appearance:       none;
    padding:          3px 6px;
    min-width:        128px;
    width:            100%;
    max-width:        100%;
    height:           24px;
    background-color: var(--field-background);
    border:           var(--field-border);
    border-radius:    1px;
    outline:          var(--field-outline);

    &:focus {
      border:  var(--field-border-focused);
      outline: var(--field-outline-focused);
    }

    &:disabled {
      background-color: var(--field-background-disabled);
      cursor:           not-allowed;
      color:            var(--disabled)
    }
  }

  &__max {
    position:    absolute;
    right:       6px;
    top:         6px;
    user-select: none;
    box-shadow:  -4px 0 8px var(--field-background);

    & ~ .input-text__input {
      padding-right: 3em;
    }
  }

  &__error {
    margin-top:  2px;
    color:       var(--error);
    height:      14px;
    font-weight: 400;
    overflow:    hidden;
  }

  &.error > &__input {
    color:   var(--error);
    border:  var(--field-border-validated);
    outline: var(--field-outline-validated);
  }

  &.error > &__max {
    color: var(--error);
  }

  &__label {
    font-size:     13px;
    margin-bottom: 3px;
  }
}

.error-enter-from,
.error-leave-to {
  margin-top: 0;
  height:     0;
  transition: 0.25s;
}

.error-enter-to {
  transition: 0.25s;
}
</style>
