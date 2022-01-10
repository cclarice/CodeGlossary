<template>
	<component v-if="$route.meta" :is="layout" :loaded="loaded" :loading="loading"/>
  <main v-if="loading">
    <div>Загрузка...</div>
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
      loading: false
    }
  },
  computed: {
    layout (): string | null {
      return this.$route.meta?.layout || null
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
    console.log(this.$route)
    setTimeout(() => {console.log(this.$route)}, 200)
    this.initLang()
    this.initTheme()
  }
})
</script>

<style lang="scss">
@import '~@/style/main.scss';
</style>
