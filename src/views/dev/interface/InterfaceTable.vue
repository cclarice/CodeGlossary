<template>
  <div class="interface__component">
    <h3>
      Simple Table
    </h3>
    <div class="interface__component-wrapper">
      <c-table
        :table="table0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from '@/models/Table'
import CTable from '@/components/table/CTable.vue'

const table0: Table = {
  caption: 'Simple Table Caption',
  head: [
    [
      'p',
      'q',
      'p & q',
      'p | q',
      'p ^ q'
    ]
  ],
  body: [
    ['0',	'0', '0', '0', '0'],
    ['0',	'1', '0', '1', '1'],
    ['1',	'1', '1', '1', '0'],
    ['1',	'0', '0', '1', '1']
  ]
}
</script>

<style lang="scss" scoped>

</style>
