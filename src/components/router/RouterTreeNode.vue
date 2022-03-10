<template>
  <div class="router-tree-node" v-if="node.meta && !node.meta.hidden">
    <div class="router-tree-node__element">
      <img class="router-tree-node__collapse" src="@/assets/icons/interface/collapse.svg" :class="{ collapsed, notCollapsible }" alt="" @click="collapsed = !collapsed">
      <img :src="node.meta.favicon" alt="">
      <span> {{ node.name }} </span>
    </div>
    <div v-if="node.meta && node.meta.children && node.meta.children.length"
         v-show="!collapsed"
         class="router-tree-node__expanded"
         :class="{ collapsed }">
      <router-tree-node v-for="nested of node.meta.children" :key="nested.name" :node="nested" :closed="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RouterTreeNode',
  data: () => ({ collapsed: false }),
  props: {
    node: {
      type: Object,
      required: true
    },
    closed: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.collapsed = this.closed
  },
  computed: {
    notCollapsible () {
      return !this.node.meta?.children
    }
  }
})
</script>

<style lang="scss" scoped>
.router-tree-node {
  display:     flex;
  flex-flow:   column;
  user-select: none;

  &__element {
    height:      20px;
    display:     flex;
    align-items: center;
    padding:     0 6px 0;
    gap:         4px;
  }
  &__expanded {
    margin-left: 12px;
    transition: height .25s;
  }
  &__collapse {
    cursor: pointer;
    transition: .25s;
    &.collapsed {
      transform: rotate(-90deg);
    }
    &.notCollapsible {
      cursor: default;
      visibility: hidden;
    }
  }
}
</style>
