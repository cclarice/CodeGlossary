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
    />
    <!--
      <thead v-if="props.table.head">
        <tr
          v-for="table_row of props.table.head"
          :key="table_row"
        >
          <td
            v-for="table_cell of table_row"
            :key="table_cell"
          >
            {{ typeof table_cell === 'string' ? table_cell : table_cell.content }}
          </td>
        </tr>
      </thead>
      <tbody v-if="props.table.body">
        <tr
          v-for="table_row of props.table.body"
          :key="table_row"
        >
          <td
            v-for="table_cell of table_row"
            :key="table_cell"
          >
            {{ typeof table_cell === 'string' ? table_cell : table_cell.content }}
          </td>
        </tr>
      </tbody>
      <tfoot v-if="props.table.foot">
        <tr
          v-for="table_row of props.table.foot"
          :key="table_row"
        >
          <td
            v-for="table_cell of table_row"
            :key="table_cell"
          >
            {{ typeof table_cell === 'string' ? table_cell : table_cell.content }}
          </td>
        </tr>
      </tfoot>
    -->
  </table>
</template>

<script setup lang="ts">
import Table, { TableBlock } from '@/models/Table'
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

</script>

<style lang="scss" scoped>


table {
  border-collapse: collapse;
}
</style>
