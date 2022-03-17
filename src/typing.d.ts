import { Layouts } from './layouts/layouts'
import { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {

  interface RouteMeta {
    favicon?: string | null
    title?:   string | null
    parent?:  RouteRecordRaw | string | null
    children?:  Array<RouteRecordRaw> | null
    layout: Layouts
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
