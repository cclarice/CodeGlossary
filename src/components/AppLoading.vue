<template>
  <main style="display: flex; justify-content: center; align-items: center; flex-grow: 1">
    Loading...
    <progress></progress>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLoading'
})
</script>