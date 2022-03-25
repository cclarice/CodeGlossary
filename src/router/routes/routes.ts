import { RouteRecordRaw } from 'vue-router'
import layouts  from '../../layouts/layouts'
import develop from './develop'

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
  },
  {
    path: '/large',
    name: 'LargeBlock',
    component: () => import('@/views/dev/LargeBlock.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: '',
      layout: layouts.EmptyLayout
    }
  },
  {
    path: '/capibarochka',
    name: 'Capibara',
    component: () => import('@/views/capibarochka/CapiMain.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: '',
      layout: layouts.EmptyLayout
    }
  },
  ...develop
]

export default routes
