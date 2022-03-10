<template>
  <label class="input-text" :class="error">
    <span v-if="title"
          class="input-text__title">
      {{ title }}
    </span>
    <input class="input-text__input"
           :type="type"
           @input="$emit('update:input', $event.target.value)"
           :value="input">
    <small class="input-text__max" v-if="max">
      {{ `${input ? input.length : 0}/${max}` }}
    </small>
    <small class="input-text__error" v-if="error">
      {{ error }}
    </small>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputText',
  props: {
    title:       { type: String },
    error:       { type: String },
    input:       { type: String },
    icon:        { type: String },
    type:        { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    max:         { type: Number },
    disabled:    { type: Boolean }
  }
})
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
