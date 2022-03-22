<template>
  <div class="tabs" v-if="tabs">
    <div v-for="tab of tabs" :key="tab.id"
         class="tabs__tab"
         @click="$emit('update:modelValue', tab.id)"
         :class="{ active: tab.id === modelValue }">
      <img v-if="tab.icon"
           class="tabs__tab-icon"
           :src="tab.icon" :alt="tab.name">
      <span class="tabs__tab-name">
        {{ tab.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  id: number,
  icon?: string,
  name?: string
}

type Tabs = Array<Tab>

defineEmits(['update:modelValue'])
const { tabs, modelValue } = defineProps<{ tabs: Tabs, modelValue: Tab['id'] }>()
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  overflow: hidden;
  background-color: var(--tabs-background);
  -webkit-box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;
  -moz-box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;
  box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;

  &__tab {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    height:  28px;
    background-color: var(--tab-background);
    border-top: 1px solid transparent;
    border-bottom: 1px solid var(--tab-border);
    transition: border .2s, background-color .2s;
    user-select: none;

    &.active {
      background-color: var(--tab-background-active);
      border-top: 3px solid transparent;
      border-bottom: 3px solid var(--tab-border-active);
    }

    &-icon {
      width: 16px;
      height: 16px;
    }

    &-name {
      line-height: 14px;
    }
  }
}
</style>
