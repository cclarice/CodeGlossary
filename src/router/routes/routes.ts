import { RouteRecordRaw } from 'vue-router'
import layouts  from '../../layouts/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CodeGlossary',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: '',
      layout: layouts.MainLayout
    }
  },
  {
    path: '/empty',
    name: 'CodeGlossaryEmpty',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: '',
      layout: layouts.EmptyLayout
    }
  }
]

export default routes
