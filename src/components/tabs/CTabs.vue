<template>
  <div class="tabs">
    <c-tabs-bar :tabs="ready_tabs" v-model="tab"></c-tabs-bar>
      <div class="tabs__slide" v-for="rtab of ready_tabs" :key="rtab" v-show="rtab.id === tab" v-scrollable>
        <slot :name="rtab.id">
          ...
        </slot>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import CTabsBar, { CTabs } from './CTabsBar.vue'

interface CTabsWithoutId {
  name?: string
  icon?: string
}

const { tabs, defaultTab = 0, vertical = false } =
  defineProps<{ tabs: Array<CTabsWithoutId>, defaultTab?: number, vertical?: boolean }>()
const tab = ref(defaultTab)
const ready_tabs = computed((): CTabs => tabs.map((tab, index)=> ({ id: index, ...tab })))
const slots = useSlots()
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
