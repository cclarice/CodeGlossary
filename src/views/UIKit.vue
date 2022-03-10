<template>
  <div class="ui">
    <h1>CodeGlossary UI Kit</h1>
    <div class="ui__block">
      <h2>Input Text</h2>
      <input-text v-model:input="inputTextDefaultValue"/>
      <input-text v-model:input="inputTextErrorValue" error="Error text"/>
      {{ inputTextDefaultValue }}
    </div>
    <pre>{{ JSON.stringify($data, null, '\t') }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DebugPanel from '@/components/DebugPanel.vue'
import InputText from '@/components/inputs/InputText.vue'

export default defineComponent({
  name: 'UIKit',
  components: { DebugPanel, InputText },
  data: () => ({
    inputTextDefaultValue: '',
    inputTextErrorValue: 'Error'
  }),
})
</script>

<style lang="scss" scoped>
.ui {
  display:          flex;
  flex-flow:        column;
  width:            1280px;
  max-width:        1280px;
  background-color: var(--panel-background);
  gap:              16px;
  padding:          16px;

  &__block {
    display:   flex;
    flex-flow: column;
    gap:       8px;
  }
}
</style>
