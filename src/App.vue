<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import ApplicationLayout from '@/layouts/ApplicationLayout.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MainLayout,
    EmptyLayout,
    ApplicationLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
})
</script>

<style lang="scss">
  @import '~@/style/main.scss';
</style>
