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

<style>
#codeglo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
