<template>
	<component :is="layout" :loaded="loaded" :loading="loading"></component>
  <main v-if="loading">
    <div>Loading...</div>
    <progress/>
  </main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapMutations } from 'vuex'
import AppLoading from '@/components/AppLoading.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLoading,
    MainLayout: defineAsyncComponent(() => import('./layouts/MainLayout.vue')),
    EmptyLayout: defineAsyncComponent(() => import('./layouts/EmptyLayout.vue'))
	},
  data () {
    return {
      loading: true
    }
  },
  computed: {
    layout (): string {
      return this.$route.meta?.layout || 'MainLayout'
    }
  },
  methods: {
    ...mapMutations('lang', ['initLang']),
    ...mapMutations('theme', ['initTheme']),
    loaded () {
      this.loading = false
    }
  },
  created () {
    this.initLang()
    this.initTheme()
  }
})
</script>

<style lang="scss">
@import '~@/style/main.scss';
</style>
