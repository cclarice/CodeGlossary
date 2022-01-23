<template>
  <iframe :src="html" style="border: none; width: 100%; height: 100%" :style="{ backgroundColor }">
  </iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HTMLViewer.vue',
  props: {
    html: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>

</style>