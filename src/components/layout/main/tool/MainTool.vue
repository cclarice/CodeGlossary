<template>
  <component class="Tool" :is="toolComponent">

  </component>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainTool',
  props: {
    tool: {
      default: null
    }
  },
  computed: {
    toolComponent () {
      if (!this.tool) {
        return null
      }
      return this.tool.component
    }
  },
  components: {

  },
  created () {

  }
})
</script>

<style lang='scss' scoped>
.Tool {
  display: flex;
  height: 100%;
  // background: #3C3F41;
}
</style>