<template>
  <table v-if="props.table">
    <caption v-if="props.table.caption" />
    <colgroup v-if="props.table.column_group">
      <col>
    </colgroup>
    <c-table-block
      v-for="block in blocks"
      :key="block.tag"
      :tag="block.tag"
      :block="block.block"
      @change-cell="emit('change-cell', $event)"
    />
  </table>
</template>

<script setup lang="ts">
import Table, { TableBlock, CellData } from '@/models/Table'
import CTableBlock from '@/components/table/CTableBlock.vue'
import { computed } from 'vue'

interface Props {
  table: Table
  sortable?: boolean
}

const props = defineProps<Props>()

type TableTagBlock = Array<{ tag: 'thead' | 'tbody' | 'tfoot', block: TableBlock }>

const blocks = computed((): TableTagBlock => {
  const blocks: TableTagBlock = []
  const { head, body, foot } = props.table

  if (head) { blocks.push({ tag: 'thead', block: head }) }
  if (body) { blocks.push({ tag: 'tbody', block: body }) }
  if (foot) { blocks.push({ tag: 'tfoot', block: foot }) }
  return blocks
})

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'change-cell', data: CellData): void
}>()

</script>

<style lang="scss" scoped>


table {
  border-collapse: collapse;
}
</style>
