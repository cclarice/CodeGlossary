<template>
  <div class="CalculatorRegular" @keydown="log" ref="div">
    <div class="CalculatorRegularResult">
      <p>{{ viewString }}</p>
      <code>{{ codeString }}</code>
      <p :style="{ color: color }">{{ result }}</p>
    </div>
    <div class="CalculatorRegularInputs">
      <div v-for="(buttons, index) of buttonsMap" :key="index" class="CalculatorRegularInput">
        <BaseIcon v-for="button of buttons" :key="button[0]" :src="icons('./' + button[0] + '.svg')" :value="button[1]" @click="calc"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseIcon from "@/components/base/icon/BaseIcon.vue";

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
      viewString: '',
      codeString: '',
      result: '',
      color: '#aeb0b3'
    }
  },
  methods: {
    calc (e) {
      if (!'␡␈'.includes(e)) {
        this.codeString += e
        if (/\d/.test(e) || '.()+-%'.includes(e)) {
          this.viewString += e
        }
        else {
          switch (e) {
            case '/': this.viewString += '÷'; break
            case '*': this.viewString += '×'; break
          }
        }
      }
      else {

        this.codeString = e === '␈' ? this.viewString.substring(0, this.codeString.length - 1) : ''
        this.viewString = e === '␈' ? this.viewString.substring(0, this.viewString.length - 1) : ''
      }
      try {
        const result = eval(this.viewString)
        this.result = result
        this.color = '#aeb0b3'
      }
      catch (e)  {
        console.log('Can\'t Parse This String')
        this.color = '#FF5261'
      }
    },
    log (e) {
      console.log(e.keyCode)
    }
  },
  mounted () {
    this.$refs.div.focus()

    document.addEventListener('keydown', (e) => {
      console.clear(e)
      console.log(e)
      this.calc(e.key)
    })

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