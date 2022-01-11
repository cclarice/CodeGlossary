<template>
	<component :is="layout" :loaded="loaded" :loading="loading"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import AppLoading from '@/components/AppLoading.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLoading,
    MainLayout,
    EmptyLayout
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
    this.initLang()
    this.initTheme()
  }
})
</script>

<style lang="scss">
@import '~@/style/main.scss';
</style>
