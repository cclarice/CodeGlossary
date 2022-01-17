<template>
  <div class="Explorer">
    <header>

    </header>
    <aside>

    </aside>
    <main v-if="true"
          class="ExplorerMain">
      <div class="ExplorerMainElement" v-if="$route.meta.parent" @click="$router.push($route.meta.parent)">
        <img class="ExplorerMainElementFavicon" :src="$route.meta.parent.meta.favicon || require('@/assets/icons/stub.svg')" :alt="$route.meta.parent.name">
        <span class="ExplorerMainElementName">..</span>
      </div>
      <div class="ExplorerMainElement" v-for="element of routes" :key="element.name" @click="$router.push(element)">
        <img class="ExplorerMainElementFavicon" :src="element.meta.favicon || require('@/assets/icons/stub.svg')" :alt="element.name">
        <span class="ExplorerMainElementName">{{ element.name }}</span>
      </div>
    </main>
    <main v-else
          class="ExplorerMain">
    </main>
    <footer class="ExplorerFooter">
      <div class="ExplorerFooterLeft">
        Element: {{ routes.length }}
      </div>
      <div class="ExplorerFooterRight">
        <img :src="require('@/assets/icons/stub.svg')" alt="">
        <img :src="require('@/assets/icons/stub.svg')" alt="">
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'Explorer',
  computed: {
    routes () {
      console.log('Computing routes')
      return this.$router.getRoutes()
        .filter(route => route?.meta?.parent && (route.meta.parent as RouteRecordRaw).path === this.$route.path)
    }
  }
})
</script>

<style lang="scss" scoped>
.Explorer {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 25% auto;
  grid-template-rows: 20px auto 20px;
  flex-flow: column;
  grid-column-gap: 1px;
  background-color: var(--main-background);
}

header {
  grid-area: 1 / 1 / 1 / 3;
  background-color: var(--panel-background);
  border-bottom: 1px var(--panel-border);
}

aside {
  background-color: #313335;
}

main {
  background-color: var(--main-background);
  display: flex;
  padding: 8px;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  gap: 8px;
}

.ExplorerMainElement {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 128px;
  width: 128px;
  max-height: 160px;
  height: 160px;
  @media (max-width: 1024px) {
    max-width: 64px;
    max-height: 80px;
  }
  gap: 8px;
  overflow: hidden;
  &Favicon {
    display: flex;
    max-width: 100%;
    width: 50%;
  }
  &Name {

  }
}

footer {
  display: flex;
  justify-content: space-between;
  grid-area: 3 / 1 / 3 / 3;
  background-color: var(--panel-background);
  border-top: 1px var(--panel-border);
}
</style>