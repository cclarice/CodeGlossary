<template>
  <div
    v-if="props.tabs"
    class="tabs"
  >
    <div
      v-for="tab of props.tabs"
      :key="tab.id"
      class="tabs__tab"
      :class="{ active: tab.id === props.modelValue }"
      @click="$emit('update:modelValue', tab.id)"
    >
      <img
        v-if="tab.icon"
        class="tabs__tab-icon"
        :src="tab.icon"
        :alt="tab.name"
      >
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

interface Props {
  tabs: Array<Tab>,
  modelValue: Tab['id']
}

const props = defineProps<Props>()
defineEmits(['update:modelValue'])
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
