<template>
  <tr
    v-if="props.tabs"
    class="tabs-bar"
  >
    <th
      v-for="tab of props.tabs"
      :key="tab.id"
      class="tabs-bar__tab"
      :class="{ active: tab.id === props.modelValue}"
      @click="$emit('update:modelValue', tab.id)"
    >
      <div style="display: flex; align-items: center; height: 100%; gap: 4px;">
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
    </th>
  </tr>
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
  overflow: hidden;
  background-color: var(--tabs-background);
  border-bottom: var(--tab-border);
  flex: 0 0 28px;
  border-collapse: collapse;
  box-shadow: 0 -1px 0 var(--tab-border) inset;

  &__tab {
    border-collapse: collapse;
    padding: 0 8px;
    height:  28px;
    background-color: var(--tab-background);
    transition: background-color .2s, box-shadow .2s;
    box-shadow: 0 -1px 0 var(--tab-border) inset;
    user-select: none;
    &:not(:first-child) { border-left: 1px solid var(--tab-border) }
    border-right: 1px solid var(--tab-border);

    div {
      display: flex;
      gap: 4px;
      align-items: center;
      height: 100%;
      user-select: none;
    }

    &.active {
      background-color: var(--tab-background-active);
      box-shadow: 0 -3px 0 var(--tab-border-active) inset;
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
