<template>
  <div class="DebugPanel" v-show="open" :style="{ left, top }">
    <div class="DebugPanelHeader">
      <span>Debug Panel</span>
      <BaseIcon class="DebugPanelButton"
                :icon="require('@/assets/icons/interface/debug.svg')"
                @mousedown="mouseDownDebugButton"/>
    </div>
    <div class="DebugPanelBody">
      <BaseScrollable>
        <div class="ScrollableContent">
          <code>
            <slot>No data</slot>
          </code>
        </div>
      </BaseScrollable>
    </div>
  </div>
  <BaseIcon class="DebugButton"
            v-show="!open"
            :style="{ left, top }"
            :icon="require('@/assets/icons/interface/debug.svg')"
            @mousedown="mouseDownDebugButton"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseScrollable from '@/components/base/BaseScrollable.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

export default defineComponent({
  name: 'DebugPanel',
  data: () => ({
    open: false,
    x: 0xFFFF,
    y: 0xFFFF,
    px: 0,
    py: 0,
    ox: 0,
    oy: 0,
    prevEvent: null
  }),
  computed: {
    left (): string {
      return `max(12px, min(${this.x}px, calc(100vw - 12px)))`
    },
    top (): string {
      return `max(12px, min(${this.y}px, calc(100vh - 12px)))`
    }
  },
  components: { BaseIcon, BaseScrollable },
  mounted () {
    const local = localStorage.getItem('debugPosition')

    if (local) {
      const pos = local.split(' ')
      this.x = Number(pos[0])
      this.y = Number(pos[1])
    }
  },
  methods: {
    moveDebug (event: MouseEvent): void {
      this.x = event.pageX - this.ox
      this.y = event.pageY - this.oy
    },
    mouseDownDebugButton (event: MouseEvent): void {
      this.px = event.pageX
      this.py = event.pageY
      this.ox = event.offsetX - 12
      this.oy = event.offsetY - 12

      document.addEventListener('mouseup', (event: MouseEvent): void => {
        if (this.px === event.pageX && this.py === event.pageY) {
          this.open = !this.open
        } else if (event.pageX && event.pageY) {
          this.x = event.pageX - this.ox
          this.y = event.pageY - this.oy
          localStorage.setItem('debugPosition', `${this.x} ${this.y}`)
        }
        document.removeEventListener('mousemove', this.moveDebug)
      }, { once: true })
      document.addEventListener('mousemove', this.moveDebug)
    }
  }
})
</script>

<style lang="scss" scoped>
.DebugButton {
  z-index: 10;
  position: absolute;
  background-color: var(--panel-background);
  border-radius: 5px;
  user-select: none;
  transform: translate(-50%, -50%);
  opacity: 0.33;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
}
.DebugPanel {
  z-index: 10;
  position: absolute;
  display: flex;
  flex-flow: column;
  transform: translate(calc(-100% + 13px), 0);
  max-width: 325px;
  max-height: 617px;
  background-color: var(--panel-background);
  border: 1px solid var(--panel-border);
  &Button {
    background-color: var(--panel-background);
    border-radius: 5px;
    transform: translate(calc(-50% + 20px), -50%);
  }
  &Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    max-height: 24px;
    background-color: var(--popup-header);
  }
  opacity: 0.33;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
  .BaseScrollable {
    display: flex;
  }
}
.ScrollableContent {
  padding: 6px;
}
</style>