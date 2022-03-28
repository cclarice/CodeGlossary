<template>
  <div class="interface__component">
    <h3>
      Input Text Default
    </h3>
    <div class="interface__component-wrapper">
      <input-text v-model="inputTextValue0" />
      <c-code
        lang="html"
        :code="inputTextText0"
      />
      <c-table :table="inputTextTable0" />
    </div>
  </div>
  <div class="interface__component">
    <h3>
      Input Text Disabled
    </h3>
    <div class="interface__component-wrapper">
      <input-text
        v-model="inputTextValue1"
        :disabled="inputTextDisabled1"
      />
      <c-code
        lang="html"
        :code="inputTextText1"
      />
      <c-table :table="inputTextTable1" />
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
      <c-table :table="inputTextTable2" />
    </div>
  </div>
  <div class="interface__component">
    <h3>
      Input Text Error
    </h3>
    <div class="interface__component-wrapper">
      <input-text
        v-model="inputTextValue3"
        :error="inputTextRegex3.test(inputTextValue3) ? 'Error' : ''"
      />
      <c-code
        lang="html"
        :code="inputTextText3"
      />
      <c-table :table="inputTextTable3" />
    </div>
  </div>
  <div class="interface__component">
    <h3>
      Input Text Max
    </h3>
    <div class="interface__component-wrapper">
      <input-text
        v-model="inputTextValue4"
        :max="inputTextMax4"
        style="width: 128px"
      />
      <c-code
        lang="html"
        :code="inputTextText4"
      />
      <c-table :table="inputTextTable4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTable from '@/components/table/CTable.vue'
import InputText from '@/components/inputs/InputText.vue'
import CCode from '@/components/code/CCode.vue'
import { computed, ref } from 'vue'
import Table from '@/models/Table'

// 0 Default
const inputTextValue0 = ref('Default')
const inputTextText0 = '<input-text v-model="value" />'
const inputTextTable0: Table = {
  body: [[
    { content: 'value', width: 0 },
    { content: inputTextValue0, align: 'left', editable: true }
  ]]
}

// 1 Disabled
const inputTextValue1 = ref('Disabled')
const inputTextDisabled1 = ref(true)
const inputTextText1 = `<input-text
  v-model="value"
  :disabled="disabled"
/>`
const inputTextTable1: Table = {
  body: [[
    { content: 'value', width: 0 },
    { content: inputTextValue1, align: 'left', editable: true }
  ],
  [
    { content: 'disabled', width: 0 },
    { content: inputTextDisabled1, align: 'left', editable: true }
  ]]
}

// 2 Labeled
const inputTextLabel2 = ref('Label:')
const inputTextValue2 = ref('Labeled')
const inputTextText2 = `<input-text
  v-model="value"
  label="label"
/>`
const inputTextTable2: Table = {
  body: [[
    { content: 'value', width: 0 },
    { content: inputTextValue2, align: 'left', editable: true }
  ], [
    { content: 'label', width: 0 },
    { content: inputTextLabel2, align: 'left', editable: true }
  ]]
}

// 3 Error
const inputTextValue3 = ref('Error')
const inputTextRegexText3 = ref('[A-Z]')
const inputTextRegex3 = computed(() => {
  try { return RegExp(inputTextRegexText3.value) }
  catch (e) { return RegExp('') }
})
const inputTextTable3: Table = {
  body: [[
    { content: 'value', width: 0 },
    { content: inputTextValue3, align: 'left', editable: true }
  ],[
    { content: 'regex', width: 0 },
    { content: inputTextRegexText3, align: 'left', editable: true }
  ]]
}
const inputTextText3 = `<input-text
  v-model="value"
  :error="regex.test(value) ?
    'Error' : ''"
/>`

// 4 Max
const inputTextValue4 = ref('Max string length is 24!')
const inputTextMax4   = ref(24)
const inputTextText4  = `<input-text
  v-model="value"
  :max="max"
/>`
const inputTextTable4: Table = {
  body: [[
    { content: 'value', width: 0 },
    { content: inputTextValue4, align: 'left', editable: true }
  ],[
    { content: 'max', width: 0 },
    { content: inputTextMax4, align: 'left', editable: true }
  ]]
}
</script>

<style lang="scss" scoped>

</style>
