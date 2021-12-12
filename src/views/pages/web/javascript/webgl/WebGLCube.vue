<template>
  <div class="WebGLCube">
    <code ref="framerate"/>
    <canvas class="WebGLCubeCanvas" :width="settings.width" :height="settings.height" ref="canvas">
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
        width: 1280,
        height: 720
      }
    }
  },
  methods: {
    ...mapMutations('balloons', ['addBalloon'])
  },
  async mounted () {
    const frameContainer = this.$refs.framerate
    const addBalloon = this.addBalloon
    const { wgl, glm, mat } = await initWebGL(this.$refs.canvas,
      { addBalloon: addBalloon, preset: '3D', ...this.settings })
    const { world, view, proj, worldLocation, viewLocation, projLocation } = mat
    if (!wgl) return;

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

    // wgl.bufferData(wgl.ARRAY_BUFFER, new Float32Array(triangleVertices), wgl.STATIC_DRAW)
    // wgl.drawArrays(wgl.TRIANGLES, 0, 6)

    wgl.bufferData(wgl.ARRAY_BUFFER, new Float32Array(boxVertices), wgl.STATIC_DRAW)
    wgl.bufferData(wgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), wgl.STATIC_DRAW)

    let xRotationMatrix = new Float32Array(16)
    let yRotationMatrix = new Float32Array(16)

    let angle = 0
    let identityMatrix = new Float32Array(16)
    glm.mat4.identity(identityMatrix)
    let framerate = performance.now()
    let frame = 0

    let loop = function () {
      frame++
      angle = performance.now() / 1000 / 12 * 2 * Math.PI
      if (!(frame % 6)) {
        frameContainer.innerHTML = (1000 / (performance.now() - framerate)).toString().slice(0, 5)
      }
      framerate = performance.now()
      glm.mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0])
      glm.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0])
      glm.mat4.mul(world, yRotationMatrix, xRotationMatrix)
      wgl.uniformMatrix4fv(worldLocation, false, world)

      wgl.clearColor(0, 0, 0, 0)
      wgl.clear(wgl.DEPTH_BUFFER_BIT | wgl.COLOR_BUFFER_BIT)
      wgl.drawElements(wgl.TRIANGLES, boxIndices.length, wgl.UNSIGNED_SHORT, 0)

      requestAnimationFrame(loop)
    };requestAnimationFrame(loop)
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    location.reload()
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