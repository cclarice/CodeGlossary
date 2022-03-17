<template>
  <component :is="layout"/>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { onMounted, reactive, ref, shallowReactive, shallowRef, watch } from 'vue'

const layout = shallowRef(MainLayout)

onMounted(() => {
  console.log('mounted')
})
</script>

<style lang="scss">
@import '@/style/main';
</style>
