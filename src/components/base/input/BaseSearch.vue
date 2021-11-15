<template>
  <label class="BaseSearch">
    <input class="BaseSearchInput"
           type="search"
           :disabled="disabled"
           :placeholder="placeholder"
           :class="{disabled: disabled, validated: validated(val)}"
           :autofocus="autofocus"
           v-model="val"
    >
    <span class="BaseSearchCancelButton"
          v-show="val.length"
          @click="val = ''"/>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseSearch',
  data () {
    return {
      val: ''
    }
  },
  props: {
    autofocus:    { type: Boolean,  default: false },
    disabled:     { type: Boolean,  default: false },
    placeholder:  { type: String,   default: '' },
    validated:    { type: Function, default: (val: string) => { return val || true }},
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
      this.$emit('changeValue', { value: this.val })
    }
  },
  created() {
    if (this.value) {
      this.val = this.value
    }
  }
})
</script>

<style lang="scss">

.BaseSearch {
  display: flex;
  flex-direction: row-reverse;
}

.BaseSearchInput {
  color: #BBBBBB;
  height: 24px;
  min-width: 24px;
  width: 100%;
  border: 1px solid #5E6060;
  box-sizing: border-box;
  font-weight: 500;
  border-radius: 3px;
  &:focus,
  &:active {
    border: 1px solid #456A90;
    outline: #3D6185 solid 2px;
  }

  background: #4C5052 url("~@/assets/icons/find.svg") no-repeat left 5px top 3px;
  padding-left: 27px;
  outline: none;
}

.BaseSearchInput::selection {
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

.BaseSearchInput::placeholder {
  color: #787878;
  font-weight: 400;
}

.BaseSearchInput::-webkit-search-cancel-button { display: none }                // Убираем стандартное удаление

.BaseSearchCancelButton {                                                       // Делаем свою кнопку удаления
  position: absolute;
  width: 16px;
  height: 16px;
  transform: translate(-6px, 4px);
  background-image: url("~@/assets/icons/search/close.svg");
  &:hover {                                                                     // При наведении иконка изменяется
    background-image: url("~@/assets/icons/search/closeHover.svg");
  }
}
</style>
