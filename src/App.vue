<template>
  <component :is="layout"/>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { onBeforeMount, shallowRef } from 'vue'
import { useTheme } from './stores/theme'

onBeforeMount(() => {
  useTheme().loadTheme()
})

const layout = shallowRef(MainLayout)
</script>

<style lang="scss">
@import '@/style/main';
</style>
