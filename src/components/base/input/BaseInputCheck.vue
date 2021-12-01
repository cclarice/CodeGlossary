<template>
  <label class="BaseInputCheck">
    <input type="checkbox"
           :disabled="disabled"
           :autofocus="autofocus"
           v-model="val"
           @input="handleInput(val)"
      >
    <span>{{text}}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInputCheck',
  data () {
    return {
      val: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value : {
      type: String,
      required: true
    },
    text : {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    hidden: {}
  },
  model: {
    prop: 'hidden',
    event: 'input'
  },
  methods: {
    handleInput (value) {
      this.$emit('input', !value ? [this.value] : null)
    }
  }
})

</script>

<style lang='scss' scoped>
.BaseInputCheck {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  column-gap: 6px;

  input {
    appearance: none;
    width: 14px;
    height: 14px;
    margin: 4px;
    background-color: #43494A;
    border-radius: 1px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #878787;
    &:focus,
    &:active {
      background-color: #43494A;
      border: 1px solid #7B9FC7;
      outline: 3px solid #3D6185;
    }
    &:checked {
      background-image: url("~@/assets/base/checkbox/mark.svg");
      background-color: #43494A;
      background-position: center center;
      background-repeat: no-repeat;
    }
    &:disabled {
      background-color: #3C3F41;
      border: #BDBDBD;

      &:checked {
        background-color: #3C3F41;
        background-image: url("~@/assets/base/checkbox/mark_disabled.svg");
      }
    }
  }
}
</style>