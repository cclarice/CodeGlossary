/* eslint-disable */
import 'vue-router'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  interface RouteMeta {
    favicon?: string | null
    title?:   string | null
    parent?:  RouteRecordRaw | string | null
    layout?:  'MainLayout' | 'EmptyLayout'
  }
}