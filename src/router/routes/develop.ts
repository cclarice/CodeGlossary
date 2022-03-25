import { RouteRecordRaw } from 'vue-router'
import layouts from '@/layouts/layouts'

const develop: Array<RouteRecordRaw> = [
  {
    path: '/dev',
    name: 'Develop',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: layouts.MainLayout,
      stats: {
        creator: '',
        createdDate: new Date(1647868571807)
      },
      parent: '/'
    }
  },
  {
    path: '/dev/interface',
    name: 'Interface',
    component: () => import('@/views/dev/Interface.vue'),
    meta: {
      layout: layouts.MainLayout,
      stats: {
        creator: 'oredan',
        creatorUrl: '',
        createdDate: new Date(1647892462691),
        updatedDate: new Date(1647892462691)
      },
      parent: '/'
    }
  }
]

export default develop
