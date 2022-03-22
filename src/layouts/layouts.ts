import EmptyLayout from './EmptyLayout.vue'
import MainLayout from './MainLayout.vue'

export type LayoutComponent = typeof EmptyLayout | typeof MainLayout

export interface Layouts {
  EmptyLayout: LayoutComponent
  MainLayout: LayoutComponent
}

const layouts: Layouts = {
  EmptyLayout,
  MainLayout
}

export default layouts
