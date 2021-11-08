<template>
  <label class="BaseInputText">
    <input class="BaseInputTextInput"
           type="text"
           :disabled="disabled"
           :placeholder="placeholder"
           :class="{disabled: disabled, validated: validated(val)}"
           :autofocus="autofocus"
           v-model="val"
    >
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInputText',
  data () {
    return {
      val: ''
    }
  },
  props: {
    autofocus:    { type: Boolean,  default: false },
    disabled:     { type: Boolean,  default: false },
    placeholder:  { type: String,   default: ''},
    validated:    { type: Function, default: (val: string) => {return val || true}},
    value:        { default: null }
  },
  watch: {
    value (v) {
      this.val = v
    },
    val () {
      this.throwValue()
    }
  },
  methods: {
    throwValue () {
      this.$emit('changeValue', {value: this.val})
    }
  }
})
</script>

<style lang="scss">
.BaseInputTextInput {
  height: 24px;
  min-width: 24px;
  width: 100%;
  background: #4C5052;
  border: 1px solid #5E6060;
  box-sizing: border-box;
  font-weight: 500;
  &:focus,
  &:active {
    border: 1px solid #456A90;
    outline: #3D6185 solid 2px;
  }
  padding-left: 7px;
}
.BaseInputTextInput::selection {
  color: #BBBBBB;
  background: #4B6EAF;
}

.isDefault {
  background: #365880;
  border: 1px solid #4C708C;
  color: #FEFEFE;
}

.disabled {
  background: #3C3F41;
  border: 1px solid #646464;
  cursor: not-allowed;
  color: #777777;
  &:focus,
  &:active {
    border: 1px solid #646464;
    outline: none;
  }
}
.BaseInputTextInput::placeholder {
  color: #787878;
  font-weight: 400;
  transform: translateY(1px);
}
</style>