import { PROJECT_USER, FILE_USER } from '@/consts/favicons'
import { MAIN_LAYOUT } from '@/consts/layouts'
import { RouteRecordRaw } from 'vue-router'

const users: Array<RouteRecordRaw> = [
	{
		path: '/users',
		name: 'Users',
		component: () => import('@/views/Explorer.vue'),
		meta: {
			title: 'Users',
			favicon: PROJECT_USER,
			parent: '/routes',
			layout: MAIN_LAYOUT
		}
	},
	{
    path: '/users/oredan',
    name: 'UserOredan',
    component: () => import('@/views/Explorer.vue'),
    meta: {
      title: 'Oredan',
      favicon: FILE_USER,
      parent: '/users',
      layout: MAIN_LAYOUT
    }
  },
	{
    path: '/users/tatcray',
    name: 'UserTatcray',
    component: () => import('@/views/Explorer.vue'),
    meta: {
      title: 'Tatcray',
      favicon: FILE_USER,
      parent: '/users',
      layout: MAIN_LAYOUT
    }
  },
	{
    path: '/users/tw1n9bun',
    name: 'UserTw1n9bun',
    component: () => import('@/views/Explorer.vue'),
    meta: {
      title: 'Tw1n9bun',
      favicon: FILE_USER,
      parent: '/users',
      layout: MAIN_LAYOUT
    }
  },
]

export default users