<template>
  <main-header>
    <main-tool position="top" />
  </main-header>
  <main class="main-main">
    <nav class=main-left>
      Left
    </nav>
    <aside class="main-tool tool-bottom">
      Tool Bottom
    </aside>
    <router-view class="main-view" />
    <aside class="main-tool tool-bottom">
      Tool Bottom
    </aside>
    <nav class="main-right">
      Right
    </nav>
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
import MainTool from './main-components/MainTool.vue'
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
}
.main-main {
  display: flex;
}
</style>
