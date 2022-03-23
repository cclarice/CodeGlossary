<template>
  <component :is="props.tag">

  </component>
</template>

<script setup lang="ts">
import { Component } from 'vue'
import { TableBlock } from '@/components/table/TTable'

interface Props {
  tag: 'thead' | 'tbody' | 'tfoot'
  block: TableBlock
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
