<template>
  <div class="code" :class="`code_lang-${lang}`">
    <gutter :lines="lines" v-if="lines"/>
    <pre><code v-text="props.code"></code></pre>
  </div>
</template>

<script setup lang="ts">
import Gutter from '@/components/code/Gutter.vue'
import { computed } from 'vue'

const props = defineProps<{ code: string, lang?: 'html' }>()

const lines = computed(() => {
  let lines = 1

  for (const char of props.code) {
    if (char === '\n') {
      lines++;
    }
  }
  return lines
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
