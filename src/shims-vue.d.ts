/* eslint-disable */
import 'vue-router'
import { RouteRecordRaw } from 'vue-router'

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
    children?:  Array<RouteRecordRaw> | null
    layout:  'MainLayout' | 'EmptyLayout'
    stats?: {
      creator?: string,
      creatorUrl?: string,
      updater?: string,
      updaterUrl?: string,
      createdDate?: Date,
      updatedDate?: Date
    },
    hidden?: boolean
  }
}
