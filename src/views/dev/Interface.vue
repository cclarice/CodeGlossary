<template>
  <div class="interface">
    <c-tabs
      :tabs="tabs"
      :default-tab="defaultTab"
    >
      <template #0>
        <interface-input />
      </template>
      <template #1>
        <h2>
          Tabs
        </h2>
      </template>
      <template #2>
        <interface-table />
      </template>
      <template #3>
        <interface-color />
      </template>
      <template #4>
        <h2>
          Other
        </h2>
      </template>
    </c-tabs>
  </div>
</template>

<script setup lang="ts">
import CTabs from '@/components/tabs/CTabs.vue'
import stub from '~@/icons/stub.svg'
import InputTextIcon from '~@/icons/interface/input-text.svg'
import TabsIcon from '~@/icons/interface/tabs.svg'
import TableIcon from '~@/icons/interface/table.svg'
import ColorIcon from '~@/icons/interface/color.svg'

import InterfaceTable from '@/views/dev/interface/InterfaceTable.vue'
import InterfaceInput from '@/views/dev/interface/InterfaceInput.vue'
import InterfaceColor from '@/views/dev/interface/InterfaceColor.vue'

const tabs = [
  { id: 0, icon: InputTextIcon, name: 'Inputs', },
  { id: 1, icon: TabsIcon, name: 'Tabs' },
  { id: 2, icon: TableIcon, name: 'Tables' },
  { id: 3, icon: ColorIcon, name: 'Colors' },
  { id: 4, icon: stub, name: 'Other' }
]
const defaultTab = document.URL.indexOf('#') !== -1 ? tabs.find((tab) =>
  document.URL.substring(document.URL.indexOf('#') + 1) === tab.name.toLocaleLowerCase())?.id || 0 : 0
</script>

<style lang="scss" scoped>
:deep(.interface__component) {
  display: flex;
  flex-flow: column;
  gap: 16px;
  align-items: center;
  max-width: 100%;

  .interface__component-wrapper {
    display: flex;
    flex-flow: column;
    padding: 15px;
    border: 1px dashed #7B61FF;
    background-color: var(--panel-background);
    border-radius: 5px;
    gap: 4px;
    min-width: min(280px, 100%);
    max-width: 100%;

    code:not(:nth-child(2)) {
      margin-bottom: 16px;
    }
  }
}
:deep(.tabs__slide) {
  gap: 16px;
}
</style>
