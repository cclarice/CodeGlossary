<template>
  <header
    class="main-header"
    :class="{ 'main-header_slotted': props.hasSlot }"
  >
    <nav class="main-header__path">
      path
    </nav>
    <nav class="main-header__actions">
      <input-icon
        :icon="stub"
        @i-click="log"
      />
      <input-icon
        :icon="stub"
        @i-click="log"
      />
      <input-icon
        :icon="stub"
        @i-click="log"
      />
      <input-icon
        :icon="stub"
        @i-click="log"
      />
      <input-icon
        :icon="icons[theme.theme]"
        @i-click="theme.cycleTheme()"
      />
    </nav>
    <slot />
  </header>
</template>

<script setup lang="ts">
import InputIcon from '@/components/inputs/InputIcon.vue'
import stub from '@/assets/icons/stub.svg'
import { useTheme } from '@/stores/theme'
import dark from '@/assets/icons/theme/dark.svg'
import light from '@/assets/icons/theme/light.svg'
import odan from '@/assets/icons/theme/odan.svg'

interface Props {
  hasSlot: boolean
}

const icons: { 'dark': string, 'light': string, 'odan': string } = { dark, light, odan }
const theme = useTheme()
const props = defineProps<Props>()

const log = () => {
  console.log('i-click')
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  background-color: var(--panel-border);
  min-height: 29px;
  padding-bottom: 1px;

  &_slotted {
    display: grid;
    grid-template-rows: 28px 21px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "path actions"
                         "bar bar";
    row-gap: 1px;
    padding: 0;
  }
}

.main-header__actions, .main-header__path {
  display: flex;
  flex: 1;
  background-color: var(--panel-background);
  align-items: center;
  grid-row: 1;
}

.main-header__actions {
  flex-flow: row-reverse;
  grid-column: 2;
}
</style>
