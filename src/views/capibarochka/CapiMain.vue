<template>
  <div class="capibara">
    <img
      src="@/assets/ForCapibara/capibaraAnimated.svg"
      alt=""
    >
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event: PointerEvent) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('pointermove', update))
onUnmounted(() => window.addEventListener('pointermove', update))

</script>

<style>
.capibara {
  position: absolute;
}
</style>
