<template>
  <table v-if="props.table">
    <caption />
    <colgroup>
      <col>
    </colgroup>
    <c-table-block />
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
  </table>
</template>

<script setup lang="ts">
import Table from '@/components/table/TTable'
import CTableBlock from '@/components/table/CTableBlock.vue'

interface Props {
  table: Table
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
