<template>
  <component :is="props.tag">
    <tr
      v-for="table_row of props.block"
      :key="table_row"
    >
      <td
        v-for="table_cell of table_row"
        :key="table_cell"
      >
        {{ typeof table_cell === 'string' ? table_cell : table_cell.content }}
      </td>
    </tr>
  </component>
</template>

<script setup lang="ts">
import { TableBlock } from '@/components/table/TTable'

interface Props {
  tag: 'thead' | 'tbody' | 'tfoot'
  block: TableBlock
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
