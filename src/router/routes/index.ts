import { RouteRecordRaw } from 'vue-router'
import test from '@/router/routes/test'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CodeGlossary',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'CodeGlossary',
      favicon: null,
      parent: null
    }
  },
  ...test,
  {
    path: '/bleb',
    name: 'Bleb',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Bleb',
      favicon: require('@/assets/favicons/cmd.svg'),
      parent: '/'
    }
  }
]

routes.forEach((route: RouteRecordRaw) => {
  if (route.meta && typeof route.meta.parent === 'string') {
    route.meta.parent = routes.find(( route0: RouteRecordRaw ) => {
      return route.meta && route0.path === route.meta.parent
    })
  }
})

export default routes