<template>
  <main-header>
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
  <main class="main-main">
    <main-bar position="left">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
    <aside class="main-tool tool-bottom">
      Tool Bottom
    </aside>
    <router-view class="main-view" />
    <aside class="main-tool tool-bottom">
      Tool Bottom
    </aside>
    <main-bar position="right">
      <template #bar_left>
        left
      </template>
      <template #bar_right>
        right
      </template>
    </main-bar>
  </main>
  <footer class="main-footer">
    <aside class="main-tool tool-bottom">
      Tool Bottom
    </aside>
    <nav class="main-bar bar-bottom">
      Bar Bottom
    </nav>
    Footer
  </footer>
</template>

<script setup lang="ts">
import MainHeader from '@/layouts/main-components/MainHeader.vue'
import MainToolContainer from '@/layouts/main-components/MainToolContainer.vue'
import MainBar from '@/layouts/main-components/MainBar.vue'
</script>

<style lang="scss" scoped>
.main-main {
  display: flex;
  flex: 1;
}
.main-view {
  flex: 1;
}
</style>
