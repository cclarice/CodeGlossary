<template>
  <aside class="main-tool" :class="`main-tool_${position}`">
    <div class="main-tool__wrapper">
      <div class="main-tool__left">
        <slot name="tool__left">

        </slot>
      </div>
      <div class="main-tool__splitter" />
      <div class="main-tool__right">
        <slot name="tool__right">

        </slot>
      </div>
    </div>
    <div class="main-tool__resizer" />
  </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  position: 'top' | 'bottom' | 'left' | 'right'
}>()

onMounted(() => { console.log(props.position) })

</script>

<style lang="scss" scoped>

</style>
