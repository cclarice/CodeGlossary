<template>
  <div
    v-if="props.tabs"
    class="tabs-bar"
  >
    <div
      v-for="tab of props.tabs"
      :key="tab.id"
      class="tabs-bar__tab"
      :class="{ active: tab.id === props.modelValue}"
      @click="$emit('update:modelValue', tab.id)"
    >
      <img
        v-if="tab.icon"
        class="tabs-bar__tab-icon"
        :src="tab.icon"
        :alt="tab.name"
      >
      <span class="tabs-bar__tab-name">
        {{ tab.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CTab {
  id: number,
  icon?: string,
  name?: string
}

interface Props {
  tabs: CTabs
  modelValue: CTab['id']
}

export type CTabs = Array<CTab>

const props = defineProps<Props>()
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.tabs-bar {
  display: flex;
  overflow: hidden;
  background-color: var(--tabs-background);
  -webkit-box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;
  -moz-box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;
  box-shadow: 0px -1px 0px 0px var(--tabs-border) inset;
  flex: 0 0 28px;

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
