<template>
  <header class="main-header">
    Header
    <nav class="main-top">
      Top
    </nav>
  </header>
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

</script>

<style lang="scss" scoped>
.main- {
  &header {
    display: flex;
  }
  &main {
    flex: 1 0;
  }
}
</style>
