<template>
  <component class="Tool" :is="toolComponent" :active="active"/>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainTool',
  props: {
    tool: {
      default: null
    },
    active: {
      type: Boolean,
      required: true
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
  background: #3C3F41;
}
</style>