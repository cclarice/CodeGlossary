<template lang='html'>
  <div class="Wrapper flexCenter">
    <div class="Colors">
      <div class="ColorsHeader">
        <h1>Colors</h1>
        <BaseInputRadio name="format"
                        :radios="[
                          { text: 'HEX', value: 'HEX' },
                          { text: 'RGB', value: 'RGB' }
                        ]"
                        @changeValue="format = $event"
                        :inRow="true"
        />
      </div>
      <div class="ColorWrapper">
        <div class="Color" v-for="color of colors">
          <div class="ColorBox" :style="{ backgroundColor: color.hex }"></div>
          <code v-if="format === 'HEX'">{{ color.hex }}</code>
          <code v-else style="font-size: 11px">{{ color.rgb }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseInputRadio from '@/components/base/input/BaseInputRadio.vue'
import COLORS from '@/constants/colors'

export default Vue.extend({
  name: 'TestColors',
  components: { BaseInputRadio },
  data () {
    return {
      colors: COLORS,
      format: "HEX"
    }
  }
})
</script>

<style lang='scss' scoped>
.Wrapper {
  width: 100%;
  height: 100%;
  .Colors {
    background: #3C3F41;
    padding: 40px 60px;
    max-height: calc(100% - 16px);
    max-width: calc(100% - 16px);
    display: flex;
    flex-direction: column;
    .ColorsHeader {
      display: flex;
      height: 64px;
    }
    .ColorWrapper {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      max-width: calc(120px * 8 + 16px * (8 - 1));
      max-height: calc(100% - 16px);
      column-gap: 16px;
      row-gap: 32px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .Color {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        align-items: flex-start;
        width: 120px;
        code {
          font-weight: 600;
        }
        .ColorBox {
          position: relative;
          width: 105px;
          height: 105px;
          &:after {
            content: '';
            position: absolute;
            width: 40px;
            height: 6px;
            bottom: 14px;
            left: 14px;
            background-color: white;
          }
        }
      }
    }
  }
}

@media (max-width: calc(120px * 8 + 16px * (8 - 1))) {

}

</style>