<template>
  <div class="Navigator">
    <h1>Navigator</h1>
    <div class="NavigatorShare">
      <h4>Share</h4>
      <BaseInputText v-model:value="value" :maxlength="10"/>
      <BaseButton :text="'Fixed'"/>
      <BaseButton :text="'Fixed'" :disabled="true"/>
      <BaseButton :text="'Fixed'" :type="'Default'"/>
    </div>
    <hr>
    <code @click="show = !show">Show as code {{ !show ? 'v' : '^' }}</code>
    <div class="Code" v-if="show">
      <pre v-for="(field, index) of Object.keys(Navigator.prototype)" :key="field"><span style="color: #888888">{{ index }}:</span> <span style="color: #fdc46c">{{ field }}</span> <span style="color: #c37030">{{ typeof navigator[field] }} </span><span v-if="typeof navigator[field] !== 'function'">{{ JSON.stringify(navigator[field], null, 2) }}</span><span v-else @click="console.log(navigator[field]())">function.call()</span></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInputText from '@/components/base/BaseInputText.vue'

export default defineComponent({
  name: 'Navigator',
  components: {
    BaseInputText,
    BaseButton
  },
  data () {
    return {
      navigator,
      Navigator,
      console,
      show: false,
      share: {
        url:   '',
        text:  '',
        title: '',
        files: null
      },
      value: 'text'
    }
  }
})
</script>

<style lang="scss" scoped>
.Navigator {
  display: flex;
  flex-flow: column;
  background-color: var(--panel-background);
  padding: 20px;
  gap: 8px;
  max-width: calc(100% - 16px);
  & > div:not(.Code) {
    display: flex;
    flex-flow: column;
  }
}

.Code {
  font-family: 'JetBrains Mono Medium', 'Consolas', monospace;
  background-color: var(--main-background);
  padding: 0.5em;
  & > pre {
    font-family: inherit;
    width: 100%;
    overflow: auto;
    max-width: calc(100% - 4em);
    padding: 0.25em;
    & > span {
      font-family: inherit;
    }
    &::-webkit-scrollbar{ display: none }
  }

  & > pre:nth-child(2n) {
    background-color: var(--panel-border);
  }
}
hr {
  border-color: var(--default);
}
</style>