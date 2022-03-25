<template>
  <div>
    <img
      src="../../assets/pattern4k.png"
      alt=""
      @click="router.push({ name: 'CodeGlossary' })"
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
