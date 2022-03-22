<template>
  <div class="code" :class="`code_lang-${lang}`">
    <gutter :lines="lines" v-if="lines"/>
    <pre><code contenteditable="true" v-text="edited_code" @input="updateCode"></code></pre>
  </div>
</template>

<script setup lang="ts">
import Gutter from '@/components/code/Gutter.vue'
import { onMounted, ref } from 'vue'

const { code = '', lang } = defineProps<{ code?: string, lang?: 'html' }>()
const lines = ref(1)
const edited_code = ref<string>(code)
const log = (event: Event) => {
  console.log(event)
}

const updateCode = ((event: Event) => {
  const target: HTMLElement = event.target as HTMLElement
  if (target) {
    edited_code.value = target.innerText
    console.log(target.innerText)
  }
  reCalculateLines()
})

const reCalculateLines = (() => {
  lines.value = 1

  for (const char of edited_code.value) {
    if (char === '\n') {
      lines.value++;
    }
  }
  console.log(lines.value)
})

onMounted(() => {
  reCalculateLines()
})
</script>

<style lang="scss" scoped>
.code {
  display: flex;
  gap: 4px;
  background-color: var(--main-background);
  color: var(--code-default);

  code {
    line-height: 20px;
    font-weight: 400;
    outline: none;
  }
  &_lang-html code {
    color: var(--code-tag);
  }
}
</style>
