import { LayoutComponent } from './layouts/layouts'
import { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    favicon?: string | null
    title?: string | null
    parent?: RouteRecordRaw | string | null
    children?: Array<RouteRecordRaw> | null
    layout: LayoutComponent
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
