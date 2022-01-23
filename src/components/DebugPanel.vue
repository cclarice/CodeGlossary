<template>
  <div class="DebugPanel" v-if="open" :style="{ left: `${x}px`, top: `${y}px` }">
    <div class="DebugPanelHeader">
      <span>Debug Panel</span>
      <BaseIcon class="DebugPanelButton"
                :icon="require('@/assets/icons/interface/debug.svg')"
                @mousedown="mouseDownDebugButton"/>
    </div>
    <div class="DebugPanelBody">
      <base-scrollable>
        <code>
          <slot/>
        </code>
      </base-scrollable>
    </div>
  </div>
  <BaseIcon class="DebugButton"
            v-else
            :style="{ left: `${x}px`, top: `${y}px` }"
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
    x: 0,
    y: 0,
    prevEvent: null
  }),
  components: { BaseIcon, BaseScrollable },
  mounted () {
    console.log(this.$options.name, 'mounted')
    const localX = localStorage.getItem('debugPositionX')
    const localY = localStorage.getItem('debugPositionY')

    this.x = Number(localX) || window.innerWidth - 64
    this.y = Number(localY) || window.innerHeight - 64
  },
  unmounted () {
    console.log(this.$options.name, 'unmounted')
  },
  methods: {
    mouseDownDebugButton (event: MouseEvent): void {
      const x = event.pageX
      const y = event.pageY
      const ox = event.offsetX - 12
      const oy = event.offsetY - 12

      const moveDebug = (event: MouseEvent): void => {
        if (event.pageX) { this.x = event.pageX - ox }
        if (event.pageY) { this.y = event.pageY - oy }
      }
      document.addEventListener('mouseup', (event: MouseEvent): void => {
        let px = event.pageX
        let py = event.pageY


        if (px > window.innerWidth - 13) {
          px = window.innerWidth - 13
        } else if (px < 13) {
          px = 13
        }
        if (py > window.innerHeight - 13) {
          py = window.innerHeight - 13
        } else if (py < 13) {
          py = 13
        }

        if (event.pageX === x && event.pageY === y) {
          this.open = !this.open
        } else {
          if (px) {
            localStorage.setItem('debugPositionX', String(px - ox))
            this.x = px - ox
          }
          if (py) {
            localStorage.setItem('debugPositionY', String(py - oy))
            this.y = py - oy
          }
        }
        document.removeEventListener('mousemove', moveDebug)
      }, { once: true })

      document.addEventListener('mousemove', moveDebug)
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
  opacity: 0.25;
  transition: opacity 0.25s;
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
  min-width: 160px;
  min-height: 325px;
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
  opacity: 0.25;
  transition: opacity 0.25s;
  &:hover {
    opacity: 1;
  }
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
}
</style>