<template>
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
      <c-table
        :table="{ body: [[
          { content: 'value', width: 0 },
          { content: inputTextValue0, align: 'right' }
        ]] }"
      />
    </div>
  </div>
  <div class="interface__component">
    <h3>
      Input Text Disabled
    </h3>
    <div class="interface__component-wrapper">
      <input-text
        v-model="inputTextValue1"
        disabled
      />
      <c-code
        lang="html"
        :code="inputTextText1"
      />
    </div>
  </div>
  <div class="interface__component">
    <h3>
      Input Text Labeled
    </h3>
    <div class="interface__component-wrapper">
      <input-text
        v-model="inputTextValue2"
        :label="inputTextLabel2"
      />
      <c-code
        lang="html"
        :code="inputTextText2"
      />
      <c-table
        v-memo="[ inputTextValue2 ]"
        :table="{ body: [[
          { content: 'value', width: 0 },
          { content: inputTextValue2, align: 'right' }
        ], [
          { content: 'label', width: 0 },
          { content: inputTextLabel2, align: 'right', editable: true }
        ]] }"
        @change-cell="inputTextChangeLabel"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTable from '@/components/table/CTable.vue'
import InputText from '@/components/inputs/InputText.vue'
import CCode from '@/components/code/CCode.vue'
import { ref } from 'vue'
import { CellData } from '@/components/table/CTableBlock.vue'

const inputTextText0 = ref('<input-text v-model="value" />')
const inputTextValue0 = ref('Default')
const inputTextText1 = ref(`<input-text
  v-model="value"
  disabled
/>`)
const inputTextValue1 = ref('Disabled')
const inputTextText2 = ref(`<input-text
  v-model="value"
  label="Label:"
/>`)
const inputTextValue2 = ref('Labeled')
const inputTextLabel2 = ref('Label:')
const inputTextChangeLabel = (event: CellData) => inputTextLabel2.value = event.value
</script>

<style lang="scss" scoped>

</style>
