<template>
  <component :is="props.tag">
    <tr
      v-for="table_row of props.block"
      :key="table_row"
    >
      <component
        :is="(props.tag === 'thead' ? 'th' : 'td')"
        v-for="table_cell of table_row"
        :key="table_cell"
      >
        {{ typeof table_cell === 'string' ? table_cell :
          (typeof table_cell.content === 'string' ? table_cell.content : '') }}
        <component
          :is="table_cell.content"
          v-if="table_cell.content instanceof Component"
        />
      </component>
    </tr>
  </component>
</template>

<script setup lang="ts">
import { TableBlock } from '@/models/Table'
import { Component } from 'vue'

interface Props {
  tag: 'thead' | 'tbody' | 'tfoot'
  block: TableBlock
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
td, th {
  border: 1px solid var(--table-border);
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
