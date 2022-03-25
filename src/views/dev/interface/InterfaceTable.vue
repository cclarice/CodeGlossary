<template>
  <h2>
    Tables
  </h2>
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
      'Operator',
      'Description',
      'Example'
    ]
  ],
  body: [
    // eslint-disable-next-line max-len
    ['==', 'Checks if the values of two operands are equal or not. If yes, then the condition becomes true.', '(A == B) is not true.'],
    // eslint-disable-next-line max-len
    ['!=', 'Checks if the values of two operands are equal or not. If the values are not equal, then the condition becomes true.',	'(A != B) is true.'],
    // eslint-disable-next-line max-len
    ['>',	'Checks if the value of left operand is greater than the value of right operand. If yes, then the condition becomes true.',	'(A > B) is not true.'],
    // eslint-disable-next-line max-len
    ['<',	'Checks if the value of left operand is less than the value of right operand. If yes, then the condition becomes true.',	'(A < B) is true.'],
    // eslint-disable-next-line max-len
    ['>=',	'Checks if the value of left operand is greater than or equal to the value of right operand. If yes, then the condition becomes true.',	'(A >= B) is not true.'],
    // eslint-disable-next-line max-len
    ['<=',	'Checks if the value of left operand is less than or equal to the value of right operand. If yes, then the condition becomes true.',	'(A <= B) is true.']
  ]
}
</script>

<style lang="scss" scoped>

</style>
