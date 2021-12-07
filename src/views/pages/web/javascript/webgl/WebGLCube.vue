<template>
  <div class="WebGLCube">
    <canvas class="WebGLCubeCanvas" width="1280" height="720" ref="canvas">
      Your browser does not support HTML5
    </canvas>
    <br />
    <i class="WebGLCubeText">Demo is above this text</i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

import initWebGL from '@/library/webgl/initWebGL'

export default Vue.extend({
  name: "WebGLCube",
  data () {
    return {
      settings: {
        width: 720,
        height: 1280
      }
    }
  },
  methods: {
    ...mapMutations('balloons', ['addBalloon'])
  },
  async mounted () {
    const addBalloon = this.addBalloon
    const {
			webGL,
			WebGLMatrix,
			worldMatrix,
			viewMatrix,
			projMatrix,
			matWorldUniformLocation,
			matViewUniformLocation,
			matProjUniformLocation
		} = await initWebGL(this.$refs.canvas, { addBalloon: addBalloon, preset: 'CUBE', ...this.settings })

    if (!webGL) return;

    let boxVertices = [
      //  X  |  Y  |  Z  | |  R  |  G  |  B  \\
		  // Top
		  -1.0, 1.0, -1.0,    0.0, 1.0, 1.0,
		  -1.0, 1.0,  1.0,    1.0, 1.0, 1.0,
		   1.0, 1.0,  1.0,    1.0, 1.0, 0.0,
		   1.0, 1.0, -1.0,    1.0, 0.0, 0.0,

		  // Left
		  -1.0,  1.0,  1.0,   1.0, 1.0, 1.0,
		  -1.0, -1.0,  1.0,   1.0, 0.0, 1.0,
		  -1.0, -1.0, -1.0,   0.0, 1.0, 0.0,
		  -1.0,  1.0, -1.0,   0.0, 1.0, 1.0,

		  // Right
		   1.0,  1.0,  1.0,   1.0, 1.0, 0.0,
		   1.0, -1.0,  1.0,   0.0, 1.0, 0.0,
		   1.0, -1.0, -1.0,   0.0, 0.0, 1.0,
		   1.0,  1.0, -1.0,   1.0, 0.0, 0.0,

		  // Front
		   1.0,  1.0, 1.0,    1.0, 1.0, 0.0,
		   1.0, -1.0, 1.0,    0.0, 1.0, 0.0,
		  -1.0, -1.0, 1.0,    1.0, 0.0, 1.0,
		  -1.0,  1.0, 1.0,    1.0, 1.0, 1.0,

		  // Back
		  1.0, 1.0, -1.0,     1.0, 0.0, 0.0,
		  1.0, -1.0, -1.0,    0.0, 0.0, 1.0,
		  -1.0, -1.0, -1.0,   0.0, 1.0, 0.0,
		  -1.0, 1.0, -1.0,    0.0, 1.0, 1.0,

		  // Bottom
		  -1.0, -1.0, -1.0,   0.0, 1.0, 0.0,
		  -1.0, -1.0, 1.0,    1.0, 0.0, 1.0,
		  1.0, -1.0, 1.0,     0.0, 1.0, 0.0,
		  1.0, -1.0, -1.0,    0.0, 0.0, 1.0,
	  ]

    let boxIndices = [
      // Top
      0, 1, 2,
      0, 2, 3,

      // Left
      5, 4, 6,
      6, 4, 7,

      // Right
      8, 9, 10,
      8, 10, 11,

      // Front
      13, 12, 14,
      15, 14, 12,

      // Back
      16, 17, 18,
      16, 18, 19,

      // Bottom
      21, 20, 22,
      22, 20, 23
    ]

    // webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array(triangleVertices), webGL.STATIC_DRAW)
    // webGL.drawArrays(webGL.TRIANGLES, 0, 6)


    webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array(boxVertices), webGL.STATIC_DRAW)
    webGL.bufferData(webGL.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), webGL.STATIC_DRAW)

    let xRotationMatrix = new Float32Array(16)
    let yRotationMatrix = new Float32Array(16)

    let angle = 0
    let identityMatrix = new Float32Array(16)
    WebGLMatrix.mat4.identity(identityMatrix)

    let loop = function () {
      angle = performance.now() / 1000 / 6 * 2 * Math.PI
      WebGLMatrix.mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0])
      WebGLMatrix.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0])
      WebGLMatrix.mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix)
      webGL.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)

      webGL.clearColor(0, 0, 0, 0)
      webGL.clear(webGL.DEPTH_BUFFER_BIT | webGL.COLOR_BUFFER_BIT)
      webGL.drawElements(webGL.TRIANGLES, boxIndices.length, webGL.UNSIGNED_SHORT, 0)

      requestAnimationFrame(loop)
    };requestAnimationFrame(loop)
  }
})
</script>

<style lang="scss" scoped>
.WebGLCube {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  .WebGLCubeCanvas {

  }
  i {
    font-size: 24px;
  }
}
</style>