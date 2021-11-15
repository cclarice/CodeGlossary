<template lang='html'>
  <div class="Wrapper flexCenter">
    <div class="Colors">
      <h1>Colors</h1>
      <div class="ColorWrapper">
        <div class="Color" v-for="color of colors">
          <div class="ColorBox" :style="{ backgroundColor: color.hex }"></div>
          <code>{{ color.hex }}</code><code>{{ color.rgb }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'TestColors',
  data () {
    return {
      colors: [
        { hex: '#000000', rgb: 'rgb(0, 0, 0)'       },
        { hex: '#7D7D7D', rgb: 'rgb(125, 125, 125)' },
        { hex: '#CDCDCD', rgb: 'rgb(205, 205, 205)' },
        { hex: '#FCF84A', rgb: 'rgb(252, 248, 74)'  },
        { hex: '#FDB60D', rgb: 'rgb(253, 182, 13)'  },
        { hex: '#FC801D', rgb: 'rgb(252, 128, 29)'  },
        { hex: '#FE2857', rgb: 'rgb(254, 40, 87)'   },
        { hex: '#DD1265', rgb: 'rgb(221, 18, 101)'  },
        { hex: '#FF318C', rgb: 'rgb(255, 49, 140)'  },
        { hex: '#FF45ED', rgb: 'rgb(255, 69, 237)'  },
        { hex: '#AF1DF5', rgb: 'rgb(175, 29, 245)'  },
        { hex: '#6B57FF', rgb: 'rgb(107, 87, 255)'  },
        { hex: '#087CFA', rgb: 'rgb(8, 124, 250)'   },
        { hex: '#07C3F2', rgb: 'rgb(7, 195, 242)'   },
        { hex: '#21D789', rgb: 'rgb(33, 215, 137)'  },
        { hex: '#3DEA62', rgb: 'rgb(59, 234, 98)'   }
      ]
    }
  }
})
</script>

<style lang='scss' scoped>
.Wrapper {
  width: 100%;
  height: 100%;
  .Colors {
    max-width: 1525px;
    background: #3C3F41;
    padding: 40px 60px;
    .ColorWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .Color {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        align-items: center;
        width: 175px;
        padding: 16px;
        .ColorBox {
          width: 105px;
          height: 105px;
        }
      }
    }
  }
}
</style>