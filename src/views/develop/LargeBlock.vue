<template>
  <div v-scrollable>
    <img @click="router.push({ name: 'CodeGlossary' })" src="../../assets/pattern4k.png"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
