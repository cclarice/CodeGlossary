<template>
  <pre class="gutter">{{ gutter }}</pre>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ lines?: number }>()

const gutter = computed(() => {
  let gutter = ''
  let number = 1

  if (props.lines) {
    while (number <= props.lines) {
      gutter = `${gutter}${number}\n`
      number++
    }
  }

  return gutter
})
</script>

<style lang="scss" scoped>
.gutter {
  font-family: 'JetBrains Mono', 'JetBrains Mono NL', 'Consolas', monospace;
  text-align: end;
  border-right: 1px solid var(--gutter-border);
  background-color: var(--gutter-background);
  color: var(--gutter-color);
  padding: 0 4px;
  line-height: 20px;
  user-select: none;
  font-size: 11px;
}
</style>
