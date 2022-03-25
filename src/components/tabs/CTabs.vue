<template>
  <div class="tabs">
    <c-tabs-bar
      v-model="tab"
      :tabs="ready_tabs"
    />
    <div
      v-for="(c_tab, c_tab_index) of ready_tabs"
      v-show="c_tab.id === tab"
      :key="c_tab_index"
      v-scrollable
      class="tabs__slide"
    >
      <slot :name="c_tab.id">
        ...
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CTabsBar, { CTabs } from './CTabsBar.vue'

interface CTabsWithoutId {
  name?: string
  icon?: string
}

const props = defineProps<{ tabs: Array<CTabsWithoutId>, defaultTab?: number, vertical?: boolean }>()
const tab = ref(props.defaultTab || 0)
const ready_tabs = computed((): CTabs => props.tabs.map((tab, index)=> ({ id: index, ...tab })))
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  &__slide {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    background-color: var(--main-background);
    padding: 1px 6px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
