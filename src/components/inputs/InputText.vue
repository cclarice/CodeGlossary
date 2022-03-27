<template>
  <label
    class="input-text"
    :class="{ error: props.error }"
  >
    <span
      v-if="props.label"
      class="input-text__label"
    >
      {{ props.label }}
    </span>
    <input
      class="input-text__input"
      :type="props.type || 'text'"
      :value="props.modelValue"
      :disabled="props.disabled"
      @input="updateModel"
    >
    <small
      v-if="props.maxlength"
      class="input-text__max"
    >
      {{ `${props.modelValue ? props.modelValue.length : 0}/${props.maxlength}` }}
    </small>
    <transition name="error">
      <small
        v-if="props.error"
        class="input-text__error"
      >
        {{ props.error }}
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
  minlength?: number
  maxlength?: number
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
  max-width: 100%;
  width: fit-content;

  &__input {
    appearance:       none;
    padding:          3px 6px;
    min-width:        128px;
    width:            128px;
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
      cursor: not-allowed;
      color: var(--disabled)
    }
  }

  &__max {
    position: absolute;
    right:    6px;
    top:      4px;
  }

  &__error {
    margin-top: 2px;
    color:       var(--error);
    font-weight: 400;
    overflow: hidden;
  }

  &.error > .input-text__input {
    color:   var(--error);
    border:  var(--field-border-validated);
    outline: var(--field-outline-validated);
  }

  &__label {
    font-size: 13px;
    margin-bottom: 3px;
  }
}

.error-enter-active,
.error-leave-active {
  height: 0;
  margin-top: 0;
  transition: 1.17s ease-in-out;
}

.error-leave-to {
  height: 14px;
  margin-top: 2px;
  transition: 1.17s ease-in-out;
}
</style>
