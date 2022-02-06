<template>
  <div class="card">
    <div class="card__header">
      Header
    </div>
    <div class="card__main">
      <div class="card__info">
        Info
      </div>
      <div class="card__div">
        Div 1
      </div>
      <hr class="card__separator">
      <div class="card__div">
        Div 2
      </div>
    </div>
    <div class="card__footer">
      Footer
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card'
})
</script>

<style lang="scss" scoped>

</style>
