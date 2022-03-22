<template>
  <div class="interface">
    <c-tabs :tabs="tabs">
      <template #0>
        <h2>
          Inputs
        </h2>
        <div class="interface__component">
          <h3>
            Input Text
          </h3>
          <div class="interface__component-wrapper">
            <input-text />
            <c-code lang="html" :code="inputTextText0" />
          </div>
        </div>
      </template>
      <template #1>
        <h2>
          Tabs
        </h2>
      </template>
      <template #2>
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

const inputTextText0 =
`<input-text />`

const tabs = [
  {
    id: 0,
    icon: stub,
    name: 'Inputs',
  },
  {
    id: 1,
    icon: stub,
    name: 'Tabs'
  },
  {
    id: 2,
    icon: stub,
    name: 'Other'
  }
]
</script>

<style lang="scss" scoped>
.interface__component {
  display: flex;
  flex-flow: column;
  gap: 16px;
  align-items: center;

  &-wrapper {
    display: flex;
    flex-flow: column;
    padding: 15px;
    border: 1px dashed #7B61FF;
    background-color: var(--panel-background);
    border-radius: 5px;

    code:not(:nth-child(2)) {
      margin-top: 16px;
    }
  }
}
:deep(.tabs__slide) {
  gap: 16px;
}
</style>
