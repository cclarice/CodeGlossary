<template>
  <component :is="props.tag">
    <tr
      v-for="(table_row, table_row_index) of props.block"
      :key="table_row_index"
    >
      <component
        :is="(props.tag === 'thead' ? 'th' : 'td')"
        v-for="(table_cell, table_cell_index) of table_row"
        :key="table_cell"
        :style="typeof table_cell !== 'string' && {
          width: table_cell.width !== undefined ? table_cell.width : 'auto',
          textAlign: table_cell.align,
          background: table_cell.background,
          color: table_cell.color,
          fontFamily: table_cell.font,
          fontSize: table_cell.size
        }"
      >
        {{
          typeof table_cell === 'string' ? table_cell :
          (!table_cell.editable ? table_cell.content : undefined)
        }}
        <input
          v-if="typeof table_cell !== 'string' && table_cell.editable"
          :value="table_cell.content"
          type="text"
          @input.stop="changeCell($event, table_row_index, table_cell_index)"
        >
      </component>
    </tr>
  </component>
</template>

<script setup lang="ts">
import { TableBlock } from '@/models/Table'
import { computed } from 'vue'

interface Props {
  tag: 'thead' | 'tbody' | 'tfoot'
  block: TableBlock
}

const props = defineProps<Props>()
const block_name = computed(() => props.tag === 'thead' ? 'head' : (props.tag === 'tbody' ? 'body' : 'foot'))

export interface CellData {
  value: string
  block_name: 'head' | 'body' | 'foot'
  row_index: number
  cell_index: number
}

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'change-cell', data: CellData): void
}>()

const changeCell = (event: Event, row_index: number, cell_index: number) => {
  const target = event.target as HTMLInputElement

  emit('change-cell', {
    value: target.value || '',
    block_name: block_name.value,
    row_index,
    cell_index
  })
}
</script>

<style lang="scss" scoped>
td, th {
  border: 1px solid var(--table-border);

  input {
    width: 100%;
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
  }
}
thead {
  background-color: var(--panel-background);
  th {
    padding: 3px 5px 2px;
    text-align: center;
  }
}
tbody {
  background-color: var(--main-background);
  td {
    padding: 1px 5px;
  }
}
</style>
