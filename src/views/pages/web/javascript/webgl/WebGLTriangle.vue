<template>
  <div class="WebGLTriangle">
    <canvas class="WebGLTriangleCanvas" width="720" height="720" ref="canvas">
      Your browser does not support HTML5
    </canvas>
    <br />
    <i class="WebGLTriangleText">Demo is above this text</i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

import initWebGL from '@/library/webgl/initWebGL'

export default Vue.extend({
  name: "WebglTriangle",
  methods: {
    ...mapMutations('balloons', ['addBalloon'])
  },
  async mounted () {
    const addBalloon = this.addBalloon
    const webGL = await initWebGL(this.$refs.canvas, { addBalloon: addBalloon })
    if (!webGL) return;

    // Создание буфера
    let triangleVertices = [
      //  X  |  Y  |  R  |  G  |  B  \\
         0.0,   0.86655, 0.66,  0.0,   0.66,
        -1.0, -0.86655,  0.66,  0.66,  0.0,
         1.0, -0.86655,  0.0,   0.66,   0.66
    ]

    let triangleColorState = [
        'g', 'b', 'r'
    ]

    const colorStep = 1 / 128

    setInterval(gameCycle, 16.7)

    function gameCycle() {
      rgbCycle(0)
      rgbCycle(1)
      rgbCycle(2)
      webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array(triangleVertices), webGL.STATIC_DRAW)
      webGL.drawArrays(webGL.TRIANGLES, 0, 3)
    }

    function rgbCycle(offset) {
      if (triangleColorState[offset] === 'r') {
        triangleVertices[5 * offset + 2] += colorStep
        triangleVertices[5 * offset + 4] -= colorStep
        if (triangleVertices[5 * offset + 2] >= 2.5) {
          triangleColorState[offset] = 'g'
        }
      }
      else if (triangleColorState[offset] === 'g') {
        triangleVertices[5 * offset + 3] += colorStep
        triangleVertices[5 * offset + 2] -= colorStep
        if (triangleVertices[5 * offset + 3] >= 2.5) {
          triangleColorState[offset] = 'b'
        }
      }
      else if (triangleColorState[offset] === 'b') {
        triangleVertices[5 * offset + 4] += colorStep
        triangleVertices[5 * offset + 3] -= colorStep
        if (triangleVertices[5 * offset + 4] >= 2.5) {
          triangleColorState[offset] = 'r'
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.WebGLTriangle {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  .WebGLTriangleCanvas {

  }
  i {
    font-size: 24px;
  }
}
</style>