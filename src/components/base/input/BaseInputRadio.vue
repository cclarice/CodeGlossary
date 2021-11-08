<!--                                                      -><-                                                        ->
    Radio Button                                                Радио Кнопка

    https://jetbrains.design/intellij/controls/radio_button/#writing-guidelines
<-                                                        -><-                                                       -->

<template>
  <div class="BaseInputRadio">
    <div class="BaseInputRadioLabel">
      <span>{{ label }}</span><div class="BaseInputRadioLabelHr"></div>
    </div>
    <label class="BaseInputRadioInputLabel" v-for="(radio, index) of radios" :for="'BaseInputRadio' + radio.value">
      <input class="BaseInputRadioInput"
             type="radio"
             :id="'BaseInputRadio' + radio.value"
             :name="name"
             :value="radio.value"
             :disabled="radio.disabled"
             :checked="value === index"
      >
      <span class="BaseInputRadioInputText">{{ radio.text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInputRadio',
  props: {
    name: {
      type: String,
      required: true
    },
    radios: {
      type: Array,
      required: true,
      example: [
        {
          text: 'some text',
          value: 'value' | 1 | true,
          disabled: Boolean
        },
        {
          text: 'some second text',
          value: 'value',
          disabled: Boolean
        }
      ]
    },
    defaultValue: {
      type: Number,
      default: 0
    },
    value: {
      type: Number
    },
    label: {
      type: String,
      default: null
    }
  },
  mounted() {
    if (!this.value)
      this.value = this.defaultValue
  }
}
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
</style>