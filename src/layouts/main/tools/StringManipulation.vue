<template>
  <div>
    <h4>String Manipulation</h4>
    <input>
    <input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StringManipulation'
})
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px;
  }
</style>