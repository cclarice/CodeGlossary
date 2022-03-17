<template>
  <section class="home">
    <div>

    </div>
    <div>
      <h1>CodeGlossary</h1>
      <h3></h3>
      <img @click="router.push({ name: 'LargeBlock' })" src="@/assets/custom.svg" alt="">
    </div>
    <div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
