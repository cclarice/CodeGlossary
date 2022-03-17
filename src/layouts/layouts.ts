import EmptyLayout from './EmptyLayout.vue'
import MainLayout from './MainLayout.vue'

export interface Layouts { [key: string]: typeof MainLayout }

const layouts: Layouts = {
  EmptyLayout,
  MainLayout
}

export default layouts
