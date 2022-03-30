<template>
  <main-header :has-slot="hasTopTools">
    <template #default>
      <main-bar
        v-if="hasTopTools"
        position="top"
      >
        <template #bar_left>
          <main-bar-button
            v-for="tool of tools.buttons.topLeft"
            :key="tool.id"
            :tool="tool"
          />
        </template>
        <template #bar_right>
          <main-bar-button
            v-for="tool of tools.buttons.topRight"
            :key="tool.id"
            :tool="tool"
          />
        </template>
      </main-bar>
    </template>
  </main-header>
  <main
    class="main-main"
    :style="{
      maxHeight:
        `calc(100% - 49px - ${tools.buttonsVisible ? (hasTopTools ? 22 : 0) + (hasBottomTools ? 22 : 0) : 0}px)`
    }"
  >
    <main-bar
      v-show="tools.buttonsVisible"
      v-if="tools.buttons.leftLeft.length || tools.buttons.leftRight.length"
      position="left"
    >
      <template #bar_left>
        <main-bar-button
          v-for="tool of tools.buttons.leftLeft"
          :key="tool.id"
          :tool="tool"
        />
      </template>
      <template #bar_right>
        <main-bar-button
          v-for="tool of tools.buttons.leftRight"
          :key="tool.id"
          :tool="tool"
        />
      </template>
    </main-bar>
    <router-view
      v-scrollable
      class="main-view"
    />
    <main-bar
      v-show="tools.buttonsVisible"
      v-if="tools.buttons.rightLeft.length || tools.buttons.rightRight.length"
      position="right"
    >
      <template #bar_left>
        <main-bar-button
          v-for="tool of tools.buttons.rightLeft"
          :key="tool.id"
          :tool="tool"
        />
      </template>
      <template #bar_right>
        <main-bar-button
          v-for="tool of tools.buttons.rightRight"
          :key="tool.id"
          :tool="tool"
        />
      </template>
    </main-bar>
  </main>
  <main-footer :has-slot="hasBottomTools">
    <main-bar
      v-if="hasBottomTools"
      position="bottom"
    >
      <template #bar_left>
        <main-bar-button
          v-for="tool of tools.buttons.bottomLeft"
          :key="tool.id"
          :tool="tool"
        />
      </template>
      <template #bar_right>
        <main-bar-button
          v-for="tool of tools.buttons.bottomRight"
          :key="tool.id"
          :tool="tool"
        />
      </template>
    </main-bar>
  </main-footer>
  <div
    id="droparea"
    @dragover="dragover"
  />
</template>

<script setup lang="ts">
import MainHeader from '@/layouts/main-components/MainHeader.vue'
import MainBar from '@/layouts/main-components/MainBar.vue'
import MainBarButton from '@/layouts/main-components/MainBarButton.vue'
import MainFooter from '@/layouts/main-components/MainFooter.vue'
import { useTools } from '@/stores/tool'
import { computed } from 'vue'

const tools = useTools()
tools.initTools()
const hasTopTools =
  computed(() => !!(tools.buttons.topLeft.length || tools.buttons.topRight.length) && tools.buttonsVisible)
const hasBottomTools =
  computed(() => !!(tools.buttons.bottomLeft.length || tools.buttons.bottomRight.length) && tools.buttonsVisible)
const dragover = (event: DragEvent) => {
  if (event.dataTransfer && event.dataTransfer.items[0].type === 'draggable/tool') {
    event.dataTransfer.dropEffect = 'move'
    event.preventDefault()
  }
}
</script>

<style lang="scss" scoped>
#droparea {
  position:         absolute;
  display:          none;
  width:            100%;
  height:           100%;
  z-index:          10;
  background-color: var(--default);
  opacity:          .25;
}

.main-main {
  display: flex;
  justify-content: space-between;
  flex: 1 1;
  position: relative;
}
.main-view {
  overflow: hidden;
  flex: 1;
}
</style>
