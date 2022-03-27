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
          width: table_cell.width !== undefined ? table_cell.width : null,
          textAlign: table_cell.align,
          background: table_cell.background || null,
          color: table_cell.color || null,
          fontFamily: table_cell.font || null,
          fontSize: table_cell.size || null
        }"
      >
        {{ typeof table_cell === 'string' ? table_cell :
          (!table_cell.editable ? table_cell.content : undefined) }}
        <template v-if="typeof table_cell !== 'string' && table_cell.editable">
          <input
            v-if="table_cell.content === 'string'"
            :value="table_cell.content"
            type="text"
            @input.stop="changeCell($event, table_row_index, table_cell_index)"
          >
          <template v-else-if="isRef(table_cell.content)">
            <input
              v-if="(typeof table_cell.content.value === 'string') || (typeof table_cell.content.value === 'number')"
              v-model="table_cell.content.value"
              :style="{ color: table_cell.color ||
                (typeof table_cell.content.value === 'string' ? 'var(--code-string)' : 'var(--code-number)') }"
              :type="typeof table_cell.content.value === 'string' ? 'text' : 'number'"
            >
            <span
              v-else-if="isRef(table_cell.content) && typeof table_cell.content.value === 'boolean'"
              style="color: var(--code-keyword); user-select: none; cursor: pointer"
              @click=" toggleBooleanRef(table_cell.content)"
              v-text="table_cell.content"
            />
          </template>
        </template>
      </component>
    </tr>
  </component>
</template>

<script setup lang="ts">
import { CellData, TableBlock } from '@/models/Table'
import { computed, isRef } from 'vue'

interface Props {
  tag: 'thead' | 'tbody' | 'tfoot'
  block: TableBlock
}

const props = defineProps<Props>()
const block_name = computed(() => props.tag === 'thead' ? 'head' : (props.tag === 'tbody' ? 'body' : 'foot'))

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

const toggleBooleanRef = (ref: any) => {
  if (isRef(ref) && typeof ref.value === 'boolean') {
    ref.value = !ref.value
  }
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
