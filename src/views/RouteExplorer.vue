<template>
  <div class="Explorer">
    <header>
      <base-icon :icon="require('@/assets/icons/interface/back.svg')" @cClick="$router.back()" :disabled="!back"/>
      <base-icon :icon="require('@/assets/icons/interface/next.svg')" @cClick="$router.forward()" :disabled="!forward"/>
    </header>
    <aside>
      <router-tree :tree="$router.options.routes[0].meta.children"></router-tree>
    </aside>
    <BaseScrollable class="Scrollable">
      <main v-if="!table"
            class="ExplorerIcons">
        <div class="ExplorerIconsElement" v-if="$route.meta.parent" @click="$router.push($route.meta.parent)">
          <img class="ExplorerIconsElementFavicon" :src="$route.meta.parent.meta.favicon || require('@/assets/icons/stub.svg')" :alt="$route.meta.parent.name">
          <span class="ExplorerIconsElementName">..</span>
        </div>
        <div class="ExplorerIconsElement" v-for="element of routes" :key="element.name" @click="$router.push(element)">
          <img class="ExplorerIconsElementFavicon" :src="element.meta.favicon || require('@/assets/icons/stub.svg')" :alt="element.name">
          <span class="ExplorerIconsElementName">{{ element.name }}</span>
        </div>
      </main>
      <table v-else
            class="ExplorerTable">
        <thead>
          <tr>
            <td>
              Name
            </td>
            <td>
              Date Created
            </td>
            <td>
              Date Updated
            </td>
            <td>
              Creator
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-if="$route.meta.parent" @click="$router.push($route.meta.parent)">
            <td><img class="ExplorerTableElementFavicon" :src="$route.meta.parent.meta.favicon || require('@/assets/icons/stub.svg')" :alt="$route.meta.parent.name">..</td>
            <td>{{ $route.meta.parent?.meta.dateCreated || 'Unknown'}}</td>
            <td>{{ $route.meta.parent?.meta.creator || 'Unknown' }}</td>
          </tr>
          <tr v-for="element of routes" :key="element.name" @click="$router.push(element)">
            <td><img class="ExplorerTableElementFavicon" :src="$route.meta.parent.meta.favicon || require('@/assets/icons/stub.svg')" :alt="$route.meta.parent.name">{{ element.name }}</td>
            <td>{{ element?.meta.dateCreated || 'Unknown'}}</td>
            <td>{{ element?.meta.creator || 'Unknown' }}</td>
          </tr>
        </tbody>
      </table>
    </BaseScrollable>
    <footer class="ExplorerFooter">
      <div class="ExplorerFooterLeft">
        Element: {{ routes.length }}
      </div>
      <div class="ExplorerFooterRight">
        <BaseIcon :icon="require('@/assets/elements/explorer/files_list.svg')" :active="table" @click="setTable(true)"/>
        <BaseIcon :icon="require('@/assets/elements/explorer/files_icons.svg')" :active="!table" @click="setTable(false)"/>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HistoryState, RouteRecordRaw } from 'vue-router'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseScrollable from '@/components/base/BaseScrollable.vue'
import RouterTree from '@/components/router/RouterTree.vue'

interface Data {
  back: HistoryState['back']
  forward: HistoryState['forward']
  table: boolean
}

export default defineComponent({
  name: 'RouteExplorer',
  components: { RouterTree, BaseScrollable, BaseIcon },
  data: (): Data => ({
    back: null,
    forward: null,
    table: false
  }),
  computed: {
    routes () {
      return this.$router.getRoutes()
        .filter(route => route?.meta?.parent && (route.meta.parent as RouteRecordRaw).path === this.$route.path)
    }
  },
  methods: {
    setTable (table: boolean) {
      this.table = table
      localStorage.setItem('ExplorerTable', String(table))
    }
  },
  created () {
    console.log(this.$router)
    this.back = this.$router.options.history.state.back
    this.forward = this.$router.options.history.state.forward
    const localTable = localStorage.getItem('ExplorerTable')
    if (localTable) {
      const parseTable = JSON.parse(localTable)

      if (parseTable) {
        this.table = parseTable
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.Explorer {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 384px auto;
  grid-template-rows: 29px auto 29px;
  flex-flow: column;
  background-color: var(--main-background);
}

header {
  grid-area: 1 / 1 / 1 / 3;
  background-color: var(--panel-background);
  border-bottom: 1px solid var(--panel-border);
  display: flex;
  align-items: center;
  padding: 0 2px;
}

aside {
  background-color: var(--card-alt-background);
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

.ExplorerIcons {
  max-width: 100%;
}

.ExplorerIconsElement {
  display:     flex;
  flex-flow:   column;
  align-items: center;
  max-width:   128px;
  width:       128px;
  max-height:  160px;
  height:      160px;
  @media (max-width: 1024px) {
    max-width:  64px;
    max-height: 80px;
  }
  gap:         8px;
  overflow:    hidden;
  padding-top: 8px;
  user-select: none;

  &:hover {
    background-color: var(--field-background);
    // outline: 1px dashed var(--field-border-color);
  }

  &Favicon {
    display:   flex;
    max-width: 100%;
    width:     75%;
  }

  &Name {
    text-align: center;
    font-size: 13px;
    @media (max-width: 1024px) {
      font-size: 11px;
    }
  }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: 3 / 1 / 3 / 3;
  background-color: var(--panel-background);
  border-top: 1px var(--panel-border);
  .ExplorerFooterRight {
    display: flex;
    padding: 0 2px;
  }
}

.Scrollable {
  display: flex;
  flex: 1 1 0;
  min-height: 100%;
}

.ExplorerTable {
  width: 100%;
  max-width: 100%;
  height: 0;
}
</style>
