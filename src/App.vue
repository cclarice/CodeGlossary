<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="counter++"> {{ counter }} </button>
  <router-view/>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const counter = ref(0)

watch(counter, (newCounter, oldCounter) => {
  console.log(newCounter, oldCounter)
})

onMounted(() => {
  console.log('props')
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
