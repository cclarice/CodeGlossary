<template>
  <svg v-svg:[src]="src" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})

const vSvg = {
  mounted: (svg: SVGElement, src: { value: string }) => {
    console.log(svg)
    console.log(src.value)
    svg.innerHTML = src.value
  }
}
</script>

<style lang="scss" scoped>

</style>
