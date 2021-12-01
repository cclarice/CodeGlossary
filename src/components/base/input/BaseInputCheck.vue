<template>
  <label class="BaseInputCheck">
    <input type="checkbox"
           :disabled="disabled"
           :autofocus="autofocus"
           @input="toggleVal()"
      >
    <span>{{ text }}</span>
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
    model: {}
  },
  model: {
    prop: 'model',
    event: 'input'
  },
  methods: {
    handleInput () {
      console.log('nothing')
    },
    toggleVal () {
      this.val = !this.val
      this.handleInput()
    }
    // handleInput (value) {
    //   this.$emit('input', !value ? [this.value] : null)
    // }
  },
  created () {
    function handleArray() {
      console.log('array')
      let array

      if (!this.val) {
        array = this.model.filter(elem => elem !== this.value)
      } else {
        this.model.push(this.value)
        array = this.model
      }

      this.$emit('input', array)
    }

    function handleObject() {
      console.log('object')
      this.model[this.value] = this.val
      const model = {...this.model}
      this.$emit('input', model)
    }

    function handleVariable() {
      console.log('variable')
      this.$emit('input', this.val)
    }

    if (Array.isArray(this.model)) {
      console.log('i am array')
      this.handleInput = handleArray
      this.handleInput()
    } else if (typeof this.model === 'object') {
      console.log('i am object')
      this.handleInput = handleObject
      this.handleInput()
    }
    else {
      console.log('i am variable')
      this.handleInput = handleVariable
      this.handleInput()
    }
  }
})

</script>

<style lang='scss' scoped>
.BaseInputCheck {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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