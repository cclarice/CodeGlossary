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
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#000000FF' }, '    Black', { content: '#000000FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-black)    '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#7D7D7DFF' }, '  Boulder', { content: '#7D7D7DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-boulder)  '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#CDCDCDFF' }, '   Silver', { content: '#CDCDCDFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-silver)   '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FCF84AFF' }, '    Gorse', { content: '#FCF84AFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-gorse)    '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FDB60DFF' }, '      Sun', { content: '#FDB60DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-sun)      '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FC801DFF' }, '  Ecstasy', { content: '#FC801DFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-ecstasy)  '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FE2857FF' }, '  Radical', { content: '#FE2857FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-radical)  '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#DD1265FF' }, '     Ruby', { content: '#DD1265FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-ruby)     '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FF318CFF' }, '  Fuchsia', { content: '#FF318CFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-fuchsia)  '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#FF45EDFF' }, '  Pizzazz', { content: '#FF45EDFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-pizzazz)  '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#AF1DF5FF' }, '   Violet', { content: '#AF1DF5FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-violet)   '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#6B57FFFF' }, '     Blue', { content: '#6B57FFFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-blue)     '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#087CFAFF' }, '    Azure', { content: '#087CFAFF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-azure)    '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#07C3F2FF' }, 'Turquoise', { content: '#07C3F2FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-turquoise)'],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#21D789FF' }, '   Meadow', { content: '#21D789FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-meadow)   '],
    // eslint-disable-next-line max-len
      [{ content: '  ', background: '#3DEA62FF' }, 'Malachite', { content: '#3DEA62FF', font: 'JetBrains Mono', size: '12px' }, 'var(--color-malachite)']
  ]
}
</script>

<style lang="scss" scoped>

</style>
