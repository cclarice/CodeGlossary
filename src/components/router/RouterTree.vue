<template>
  <div class="router-tree">
    <router-tree-node v-for="node of tree" :key="node.name" :node="node" :opened="opened"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterTreeNode from '@/components/router/RouterTreeNode.vue'

export default defineComponent({
  name: 'RouterTree',
  components: { RouterTreeNode },
  props: {
    tree: {
      type: Array,
      default: () => []
    },
    opened: {
      type: Object,
      default: null
    }
  }
})
</script>

<style lang="scss" scoped>
.router-tree {
  display: flex;
  flex-flow: column;
}
</style>
