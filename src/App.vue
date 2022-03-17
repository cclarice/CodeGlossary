<template>
  <component :is="layout"/>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { shallowRef } from 'vue'

const layout = shallowRef(MainLayout)
</script>

<style lang="scss">
@import '@/style/main';
</style>
