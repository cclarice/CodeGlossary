<template>
  <div class="CalculatorRegular">
    <div class="CalculatorRegularResult">
      <p>{{ viewString }}</p>
      <code>{{ codeString }}</code>
      <p :style="{ color: color }">{{ result }}</p>
    </div>
    <div class="CalculatorRegularInputs">
      <div v-for="(buttons, index) of buttonsMap" :key="index" class="CalculatorRegularInput">
        <BaseIcon v-for="button of buttons" :key="button[0]" :src="icons('./' + button[0] + '.svg')" :value="button[1]" @click="calculator({ key: button[1] })"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseIcon from '@/components/base/icon/BaseIcon.vue'
import { codeKeys, CalculatorElement, codeList, autoCloseBrackets } from '@/library/tool/calculator/calculator'

export default Vue.extend({
  name: "MainToolCalculateRegular",
  components: {
    BaseIcon
  },
  props: {
    focused: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      icons: require.context('@/assets/icons/tool/calculator/symbols/', false, /\.svg$/),
      buttonsMap: [
        [['1', '1'], ['2', '2'], ['3', '3'], ['␡', '␡'], ['␈', '␈']],
        [['4', '4'], ['5', '5'], ['6', '6'], ['+', '+'], ['-', '-']],
        [['7', '7'], ['8', '8'], ['9', '9'], ['×', '*'], ['÷', '/']],
        [['0', '0'], ['d', '.'], ['(', '('], [')', ')'], ['m', '%']]
      ],
      viewArray: [],
      codeArray: [],
      color: '#aeb0b3'
    }
  },
  computed: {
    codeArrayLast () {
      return this.codeArray[this.codeArray.length - 1]
    },
    codeString () {
      let ret = ''

      for (const code of this.codeArray) {
        ret += code.code
      }

      return ret
    },
    viewString () {
      return ''
    },
    result () {
      let result = ''

      try {
        result = eval(autoCloseBrackets(this.codeString))
        this.color = '#aeb0b3'
      }
      catch (e)  {
        result = '⚠'
        console.log(e)
        this.color = '#FF5261'
      }

      return result
    }
  },
  methods: {
    calculator (event) {
      if (this.focused && codeKeys.includes(event.key)) {
        if (typeof codeList[event.key] === 'function') {
          this.codeArray = codeList[event.key](this.codeArray)
        } else {
          if (
            this.codeArray.length &&
            this.codeArrayLast.isNumber &&
            event.key <= 9 && event.key >= 0
          ) {
            this.codeArrayLast.addNumber(event.key)
          } else {
            this.codeArray.push(new CalculatorElement(codeList[event.key]))
          }
        }
      } else if (this.focused) {
        console.log('Nothing: ', event.key)
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.calculator)
  }
})
</script>

<style lang="scss" scoped>
.CalculatorRegular {
  display: flex;
  flex-direction: column;

  padding: 1px;
  row-gap: 1px;

  .CalculatorRegularResult {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 4px;
    padding: 6px;

    * {
      padding: 4px 6px;
      height: calc(1em + 12px);
      white-space: nowrap;
      background: #2B2B2B;
    }
  }
  .CalculatorRegularInputs {
    display: flex;
    flex-direction: column;

    .CalculatorRegularInput{
      display: flex;
    }
  }
}
</style>