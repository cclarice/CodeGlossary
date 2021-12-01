<template lang='html'>
  <div class="application">
    <p>Животные: {{ animals }}</p>
    <input type="checkbox"
           name="qwe1"
           :disabled="disabled"
           :autofocus="autofocus"
           v-model="animals"
           class="default" value="Мышь">
    <input type="checkbox"
           name="qwe2"
           :disabled="disabled"
           :autofocus="autofocus"
           v-model="animals"
           class="default" value="Собака">
    <input type="checkbox"
           :disabled="disabled"
           :autofocus="autofocus"
           v-model="animals"
           class="default" value="Тумбочка">
    <base-input-check type="checkbox"
                      text="русский кот"
                      v-model="animals"
                      value="русский кот"/>
    <!--@input="e => e ? animals.push(e) : animals = animals.filter(a => a !== 'русский кот')"-->
    <span>{{ cat }}</span>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseInputCheck from "@/components/base/input/BaseInputCheck.vue";

export default Vue.extend({
  name: 'Checkers',
  components: {BaseInputCheck},
  data () {
    return {
      animals: ["Мышь"],
      cat: undefined
    }
  },
  props: {
    autofocus:    { type: Boolean,  default: false },
    disabled:     { type: Boolean,  default: false },
    value:        { default: null }
  },
  methods: {
    log (arg) {
      console.log(arg)
    }
  }
})

</script>

<style lang='scss' scoped>
  .application {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .default {
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
  }
  .disabled {
    background-color: #3C3F41;
    border: #BDBDBD;
    &:checked {
      background-color: #3C3F41;
      background-image: url("~@/assets/base/checkbox/mark_disabled.svg");
    }
  }
</style>