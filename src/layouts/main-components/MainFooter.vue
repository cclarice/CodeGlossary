<template>
  <footer
    class="main-footer"
    :class="{ 'main-footer_slotted': hasSlot }"
  >
    <slot />
    <nav class="main-footer__left">
      <div
        class="status__element"
        style="padding: 0 3px"
      >
        <img
          :src="tools.buttonsVisible ? tbVisibleIcon : tbHiddenIcon"
          alt="Toggle visability"
          @click="tools.toggleButtons"
        >
      </div>
    </nav>
    <nav class="main-footer__status status">
      <div class="status__element">
        <img
          :src="screenIcon"
          :alt="screen"
          style="margin-right: -9px"
        >
        <img
          :src="deviceIcon"
          :alt="device"
          width="8"
          style="transform: translate(0, 4px); background-color: var(--panel-background); border-radius: 2px"
        >
        <img
          :src="browserIcon"
          :alt="browser"
        >
        {{ browser }}
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import androidIcon from '~@/icons/devices/android.svg'
import iosIcon from '~@/icons/devices/ios.svg'
import linuxIcon from '~@/icons/devices/linux.svg'
import macosIcon from '~@/icons/devices/macos.svg'
import windowsIcon from '~@/icons/devices/windows.svg'
import braveIcon from '~@/icons/browsers/brave.svg'
import edgeIcon from '~@/icons/browsers/edge.svg'
import yandexIcon from '~@/icons/browsers/yandex.svg'
import operaIcon from '~@/icons/browsers/opera.svg'
import chromeIcon from '~@/icons/browsers/chrome.svg'
import firefoxIcon from '~@/icons/browsers/firefox.svg'
import unknownIcon from '~@/icons/browsers/unknown.svg'
import xl from '~@/icons/breakpoints/extra_large.svg'
import xs from '~@/icons/breakpoints/extra_small.svg'
import lg from '~@/icons/breakpoints/large.svg'
import md from '~@/icons/breakpoints/medium.svg'
import sm from '~@/icons/breakpoints/small.svg'
import tbVisibleIcon from '~@/icons/tool-bar-visible.svg'
import tbHiddenIcon from '~@/icons/tool-bar-hidden.svg'
import { useTools } from '@/stores/tool'

const tools = useTools()

defineProps({
  hasSlot: {
    type: Boolean,
    default: false
  }
})

// Screen
const getScreen = (): string => {
  return `${window.innerWidth} ✕ ${window.innerHeight}`
}
const screenIcons = { xl, xs, lg, md, sm }
const getScreenIcon = (): string => {
  return screenIcons[window.innerWidth < 600 ? 'xs' :
                     window.innerWidth <= 960 ? 'sm' :
                     window.innerWidth <= 1280 ? 'md' :
                     window.innerWidth <= 1920 ? 'lg' : 'xl']
}
const screen = ref(getScreen())
const screenIcon = ref(getScreenIcon())
const resolutionUpdate = () => {
  screen.value = getScreen()
  screenIcon.value = getScreenIcon()
}

// Browser
type IBrowser = 'Brave' | 'Edge' | 'Yandex' | 'Opera' | 'Chrome' | 'Firefox' | 'Unknown'
const browserInfo = navigator.userAgent.split(/\)/).filter((elem) => elem)
  .map((elem) => (elem.includes('(') ? elem + ')' : elem).trim())
// eslint-disable-next-line no-unused-vars
const browserIcons: { [key in IBrowser]: string } = {
  Brave: braveIcon,
  Edge: edgeIcon,
  Yandex: yandexIcon,
  Opera: operaIcon,
  Chrome: chromeIcon,
  Firefox: firefoxIcon,
  Unknown: unknownIcon
}
const browser: IBrowser =
  (navigator as any)['brave'] && 'Brave' ||
  browserInfo[2]?.includes('Edg') && 'Edge' ||
  browserInfo[2]?.includes('YaBrowser') && 'Yandex' ||
  browserInfo[2]?.includes('OPR') && 'Opera' ||
  browserInfo[2]?.includes('Chrome') && 'Chrome' ||
  browserInfo[1]?.includes('Firefox') && 'Firefox' ||
  'Unknown'
const browserIcon = computed((): string => browserIcons[browser] || unknownIcon)

// device
type IDevice = 'android' | 'ios' | 'linux' | 'macos' | 'windows' | 'unknown'

// eslint-disable-next-line no-unused-vars
const devicesIcons: { [key in IDevice]: string} = {
  android: androidIcon,
  ios: iosIcon,
  linux: linuxIcon,
  macos: macosIcon,
  windows: windowsIcon,
  unknown: unknownIcon
}
const device: IDevice =
  browserInfo[0]?.includes('Windows') && 'windows' ||
  browserInfo[0]?.includes('Android') && 'android' ||
  browserInfo[0]?.includes('Linux') && 'linux' ||
  'unknown'

const deviceIcon = computed((): string => devicesIcons[device] || unknownIcon)
onMounted(() => {
  window.addEventListener('resize', resolutionUpdate)
})
onUnmounted(() => {
  window.removeEventListener('resize', resolutionUpdate)
})
</script>

<style lang="scss" scoped>
.main-footer {
  display: flex;
  justify-content: space-between;
  background-color: var(--panel-border);
  min-height: 20px;
  padding-top: 1px;

  &_slotted {
    display:               grid;
    grid-template-rows: 21px 20px;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'bar bar'
                         'left status';
    row-gap:               1px;
    padding:               0;
  }
}

.main-footer__left, .main-footer__status {
  display: flex;
  flex: 1;
  background-color: var(--panel-background);
  align-items: center;
  grid-row: 1;
}

.main-footer__left {
  grid-area: left;
}

.main-footer__status {
  grid-column: 2;
  grid-area: status;
}

.status {
  display:   flex;
  flex-flow: row-reverse;

  &__element {
    display:     flex;
    align-items: center;
    padding:     0 5px;
    gap:         2px;
    height:      100%;
    cursor:      pointer;
    user-select: none;

    &:hover {
      background-color: var(--stripe-hovered-background);
    }
    &:active {
      background-color: var(--stripe-selected-background);
    }
  }
}
</style>
