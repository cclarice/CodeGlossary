<template>
  <div class="interface__component">
    <h3>
      Colors
    </h3>
    <div class="interface__component-wrapper">
      <c-table
        v-once
        :table="table0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from '@/models/Table'
import CTable from '@/components/table/CTable.vue'

const table0: Table = {
  head: [ [{ content: '_.', color: 'var(--table-head-background)' }, 'Name', 'HEX', 'CSS variable'] ],
  body: [
      [{ content: '  ', background: '#000000FF' }, '    Black', { content: '#000000FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-black)    '],
      [{ content: '  ', background: '#7D7D7DFF' }, '  Boulder', { content: '#7D7D7DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-boulder)  '],
      [{ content: '  ', background: '#CDCDCDFF' }, '   Silver', { content: '#CDCDCDFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-silver)   '],
      [{ content: '  ', background: '#FCF84AFF' }, '    Gorse', { content: '#FCF84AFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-gorse)    '],
      [{ content: '  ', background: '#FDB60DFF' }, '      Sun', { content: '#FDB60DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-sun)      '],
      [{ content: '  ', background: '#FC801DFF' }, '  Ecstasy', { content: '#FC801DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-ecstasy)  '],
      [{ content: '  ', background: '#FE2857FF' }, '  Radical', { content: '#FE2857FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-radical)  '],
      [{ content: '  ', background: '#DD1265FF' }, '     Ruby', { content: '#DD1265FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-ruby)     '],
      [{ content: '  ', background: '#FF318CFF' }, '  Fuchsia', { content: '#FF318CFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-fuchsia)  '],
      [{ content: '  ', background: '#FF45EDFF' }, '  Pizzazz', { content: '#FF45EDFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-pizzazz)  '],
      [{ content: '  ', background: '#AF1DF5FF' }, '   Violet', { content: '#AF1DF5FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-violet)   '],
      [{ content: '  ', background: '#6B57FFFF' }, '     Blue', { content: '#6B57FFFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-blue)     '],
      [{ content: '  ', background: '#087CFAFF' }, '    Azure', { content: '#087CFAFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-azure)    '],
      [{ content: '  ', background: '#07C3F2FF' }, 'Turquoise', { content: '#07C3F2FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-turquoise)'],
      [{ content: '  ', background: '#21D789FF' }, '   Meadow', { content: '#21D789FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-meadow)   '],
      [{ content: '  ', background: '#3DEA62FF' }, 'Malachite', { content: '#3DEA62FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-malachite)']
  ]
}
</script>

<style lang="scss" scoped>

</style>
