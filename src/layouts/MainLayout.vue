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
  <main class="main-main" :style="{ maxHeight: `calc(100% - 50px - ${ (true ? 22 : 0) + (true ? 22 : 0)}px)` }">
    <main-bar position="left">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
    <router-view class="main-view" v-scrollable/>
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
import MainToolContainer from '@/layouts/main-components/MainToolContainer.vue'
import MainBar from '@/layouts/main-components/MainBar.vue'
import MainFooter from '@/layouts/main-components/MainFooter.vue'
</script>

<style lang="scss" scoped>
.main-main {
  display: flex;
  flex: 1 1;
  position: relative;
}
.main-view {
  overflow: hidden;
  flex: 1;
}
</style>
