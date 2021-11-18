<!--                                                      -><-                                                        ->
    Radio Button                                                Радио Кнопка

    https://jetbrains.design/intellij/controls/radio_button/#writing-guidelines
<-                                                        -><-                                                       -->
<template>
  <div class="BaseInputRadio"
       :class="{ 'BaseInputRadioInRow': inRow }"
  >
    <div class="BaseInputRadioLabel" v-if="label">
      <span>{{ label }}</span><div class="BaseInputRadioLabelHr"></div>
    </div>
    <label class="BaseInputRadioInputLabel"
           v-for="(radio, index) of radios"
           :for="'BaseInputRadio' + radio.value"
    >
      <input class="BaseInputRadioInput"
             type="radio"
             :id="'BaseInputRadio' + radio.value"
             :name="name"
             :value="radio.value"
             :disabled="radio.disabled"
             :checked="value === index"
             v-model="val"
             @change="$emit('changeValue', val)"
      >
      <span class="BaseInputRadioInputText">{{ radio.text }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInputRadio',
  data() {
    return {
      val: undefined
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    radios: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: Number
    },
    label: {
      type: String,
      default: null
    },
    inRow: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.value) {
      this.val = (typeof this.defaultValue) === 'number' ?
          this.radios[this.defaultValue].value :
          this.radios.find(radio => radio.value === this.defaultValue)
    } else {
      this.val = this.value
    }
  }
})
</script>

<style lang="scss" scoped>
.BaseInputRadio {
  display: flex;
  flex-direction: column;
  .BaseInputRadioLabel {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    .BaseInputRadioLabelHr {
      width: 100%;
      height: 1px;
      background: #515151;
    }
    & > span {
      margin-right: 6px;
    }
  }
  .BaseInputRadioInputLabel {
    display: flex;
    align-items: center;
    margin-left: 22px;
    .BaseInputRadioInput {
      background-color: #43494A; // #43494A; // #AFB1B3; // #878787;
      appearance: none;
      border-radius: 50%;
      width: 15px;
      height: 15px;

      border: 1px solid #6B6B6B;
      outline: none;
      margin-right: 5px;

      position: relative;
    }
    .BaseInputRadioInput:checked {
      background-color: #43494A;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='2.5' fill='%23AFB1B3'/%3E%3C/svg%3E%0A");
    }
    .BaseInputRadioInput:focus {
      outline: 2px solid #3D6185;
      border: 1px solid #43698E;
    }
    .BaseInputRadioInputText {

    }
  }
  .BaseInputRadioInputLabel:not(:last-child) {
    margin-bottom: 10px;
  }
}
.BaseInputRadioInRow {
  flex-direction: row;
  justify-content: center;
  * {
    height: 16px;
    margin: 0;
    padding: 0;
    transform: translateY(25%);
  }
}
</style>