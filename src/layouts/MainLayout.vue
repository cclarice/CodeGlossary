<template>
  <main-header has-slot>
    <template #default>
      <main-bar position="top">
        <template #bar_left>
          left
        </template>
        <template #bar_right>
          right
        </template>
      </main-bar>
    </template>
  </main-header>
  <main
    class="main-main"
    :style="{ maxHeight: `calc(100% - 48px - ${ (true ? 22 : 0) + (true ? 22 : 0)}px)` }"
  >
    <main-bar position="left">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
    <router-view
      v-scrollable
      class="main-view"
    />
    <main-bar position="right">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
  </main>
  <main-footer has-slot>
    <main-bar position="bottom">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
  </main-footer>
</template>

<script setup lang="ts">
import MainHeader from '@/layouts/main-components/MainHeader.vue'
import MainBar from '@/layouts/main-components/MainBar.vue'
import MainFooter from '@/layouts/main-components/MainFooter.vue'
</script>

<style lang="scss" scoped>
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
