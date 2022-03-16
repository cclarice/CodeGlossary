<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="counter++"> {{ counter }} </button>
  <pre>
    {{ store }}
  </pre>
  <router-view/>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useStore } from './store'

const store = useStore()

const { name, doubleCount } = store

const counter = ref(0)

watch(counter, (newCounter, oldCounter) => {
  console.log(newCounter, oldCounter)
})

onMounted(() => {
  console.log('pinia', name, doubleCount)
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
