<template>
  <div class="Context">
    <div class="ContextElement">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Context',
  created () {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }
})
</script>

<style lang="scss" scoped>
.Content {
  position: absolute;
}
</style>