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
  data() {
    return {
      scripts: {
        glMatrix: undefined
      }
    }
  },
  methods: {
    ...mapMutations('balloons', ['addBalloon'])
  },
  mounted () {
    // this.scripts.glMatrix = document.createElement('script')
    // this.scripts.glMatrix.setAttribute('src', '/glMatrix/glMatrix.js')
    // document.head.appendChild(this.scripts.glMatrix)

    this.$loadScript('/glMatrix/glMatrix.js')
    .then(() => {
      console.log('glMatrix loaded successfully')
      mountedContinue()
    })
    .catch(() => {
      console.error('Error: glMatrix is not loaded')
    });

    function mountedContinue() {
      const addBalloon = this.addBalloon
      const WebGL = initWebGL(this.$refs.canvas, { addBalloon: addBalloon })
      if (!WebGL) return;


    }
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