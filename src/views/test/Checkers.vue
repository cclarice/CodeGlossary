<template lang='html'>
  <div class="Checkers">
<!--    <input type="checkbox"-->
<!--           name="qwe1"-->
<!--           :disabled="disabled"-->
<!--           :autofocus="autofocus"-->
<!--           v-model="animals"-->
<!--           class="default" value="Мышь">-->
<!--    <input type="checkbox"-->
<!--           name="qwe2"-->
<!--           :disabled="disabled"-->
<!--           :autofocus="autofocus"-->
<!--           v-model="animals"-->
<!--           class="default" value="Собака">-->
<!--    <input type="checkbox"-->
<!--           :disabled="disabled"-->
<!--           :autofocus="autofocus"-->
<!--           v-model="animals"-->
<!--           class="default" value="Тумбочка">-->
<!--    <base-input-check type="checkbox"-->
<!--                      text="русский кот"-->
<!--                      v-model="animals"-->
<!--                      value="русский кот"/>-->
    <!--@input="e => e ? animals.push(e) : animals = animals.filter(a => a !== 'русский кот')"-->
    <div class="Group One">
      <h1>Капибары</h1>
      <BaseInputCheck value="Олег"
                      text="Олежек"
                      v-model="array"/>
      <BaseInputCheck value="Соня"
                      text="Соне4ка"
                      v-model="array"/>
      <BaseInputCheck value="Прохор"
                      text="Прохор"
                      v-model="array"/>
      <code>array: <br> {{array}}</code>
    </div>
    <div class="Group Two">
      <h1>Лягушки</h1>
      <BaseInputCheck value="Кватя"
                      text="Квакша"
                      v-model="object"/>
      <BaseInputCheck value="Кваркадий"
                      text="Древолаз"
                      v-model="object"/>
      <BaseInputCheck value="Кваселиса"
                      text="Чесночница"
                      v-model="object"/>
      <code>object: <br> {{object}}</code>
    </div>
    <div class="Group Three">
      <h1>Выспались???</h1>
      <BaseInputCheck value="Ну типа"
                      text="Ну типа"
                      v-model="value1"/>
      <BaseInputCheck value="Я хлеб"
                      text="Я хлеб"
                      v-model="value2"/>
      <BaseInputCheck value="Нет"
                      text="Хочу спать"
                      v-model="value3"/>
      <code>value1: {{ value1 }}</code>
      <code>value2: {{ value2 }}</code>
      <code>value3: {{ value3 }}</code>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseInputCheck from "@/components/base/input/BaseInputCheck.vue";
import Test from "@/router/routes/test";

export default Vue.extend({
  name: 'Checkers',
  components: {Test, BaseInputCheck},
  data () {
    return {
      array: [],
      object: {},
      value1: false,
      value2: false,
      value3: false
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
  .Checkers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;

    .Group {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      padding: 14px;
      border: aliceblue 2px solid;
      border-radius: 3px;
      min-width: 320px;

      .BaseInputCheck{
        color: #4A4E52;
      }
      code,
      h1{
        color: #3C3F41;
      }
      code {
        background-color: #FFFFFF44;
        padding: 4px;
        border-radius: 4px;
        display: inline-block;
        max-width: 100%;
        white-space: break-spaces;
      }
    }

    .One {
      background-color: #A0BF9D;
    }

    .Two {
      background-color: #D69696;
    }

    .Three {
      background-color: #BAB824;
    }
  }
</style>