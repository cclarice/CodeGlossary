<template>
	<component v-if="layout" :is="layout"/>
	<Theme/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import Theme from '@/style/Theme.vue'

export default defineComponent({
  name: 'App',
  components: {
		MainLayout,
		EmptyLayout,
		Theme
	},
	computed: {
		layout (): string {
			return (this.$route.meta.layout || 'Main') + 'Layout'
		}
	}
})
</script>

<style lang="scss">
@import '~@/style/main.scss';
</style>
