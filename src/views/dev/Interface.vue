<template>
  <div class="interface">
    <c-tabs
      :tabs="tabs"
      :default-tab="defaultTab"
    >
      <template #0>
        <h2>
          Inputs
        </h2>
        <div class="interface__component">
          <h3>
            Input Text
          </h3>
          <div class="interface__component-wrapper">
            <input-text v-model="inputTextValue0" />
            <c-code
              lang="html"
              :code="inputTextText0"
            />
          </div>
        </div>
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
        <h2>
          Colors
        </h2>
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
import InputText from '@/components/inputs/InputText.vue'
import CCode from '@/components/code/CCode.vue'
import { ref } from 'vue'
import InterfaceTable from './interface/InterfaceTable.vue'

const inputTextText0 = ref('<input-text v-model="value"/>')
const inputTextValue0 = ref('text')
const tabs = [
  { id: 0, icon: stub, name: 'Inputs', },
  { id: 1, icon: stub, name: 'Tabs' },
  { id: 2, icon: stub, name: 'Tables' },
  { id: 3, icon: stub, name: 'Colors' },
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

  .interface__component-wrapper {
    display: flex;
    flex-flow: column;
    padding: 15px;
    border: 1px dashed #7B61FF;
    background-color: var(--panel-background);
    border-radius: 5px;
    gap: 16px;

    code:not(:nth-child(2)) {
      margin-bottom: 16px;
    }
  }
}
:deep(.tabs__slide) {
  gap: 16px;
}
</style>
