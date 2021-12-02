<template lang='html'>
  <div class="Checkers">
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
      <code class="Array">array: <br>{{ array }}</code>
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
      <code>object: <br>{{ object }}</code>
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
import BaseInputCheck from '@/components/base/input/BaseInputCheck.vue'

export default Vue.extend({
  name: 'Checkers',
  components: { BaseInputCheck },
  data () {
    return {
      array: [],
      object: {},
      value1: false,
      value2: false,
      value3: false
    }
  }
})

</script>

<style lang='scss' scoped>
.Checkers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  overflow: scroll !important;

  .Group {
    display: flex;
    flex-direction: column;
    padding: 14px;
    border: aliceblue 2px solid;
    border-radius: 3px;
    min-width: 320px;

    .BaseInputCheck{
      color: #4A4E52;
    }
    code,
    h1 {
      color: #3C3F41;
    }
    code {
      background-color: #FFFFFF44;
      padding: 4px;
      border-radius: 4px;
      display: inline-block;
      max-width: 100%;
      white-space: break-spaces;
      line-height: 1.1;
    }
    .Array {
      min-height: calc(7em + 10px);
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