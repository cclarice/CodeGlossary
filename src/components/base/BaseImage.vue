<template>
  <img class="BaseImage"
       :src="image"
       :alt="alt"
       @error="error = true">
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseImage',
  data () { return { error: false } },
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    image () {
      return this.error ? require('@/assets/icons/stub.svg') : this.src
    }
  }
})
</script>

<style lang='scss' scoped>
.BaseImage {
  min-width: 16px;
  min-height: 16px;
}
</style>