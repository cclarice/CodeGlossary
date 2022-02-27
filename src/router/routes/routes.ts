import { RouteRecordRaw } from 'vue-router'
import develop from '@/router/routes/develop'
import { MAIN_LAYOUT } from '@/consts/layouts'
import { FAVICON, PROJECT_CODEGLO } from '@/consts/favicons'
import users from '@/router/routes/users/users'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CodeGlossary',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: FAVICON,
      layout: MAIN_LAYOUT
    }
  },
  {
    path: '/routes',
    name: 'Routes',
    component: () => import('@/views/RouteExplorer.vue'),
    meta: {
      title: 'CodeGlossary',
      parent: '/',
      layout: MAIN_LAYOUT,
      favicon: PROJECT_CODEGLO
    }
  },
  ...develop,
  ...users,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/RouteExplorer.vue'),
    meta: {
      title: '404',
      parent: '/',
      layout: MAIN_LAYOUT,
      favicon: PROJECT_CODEGLO
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
