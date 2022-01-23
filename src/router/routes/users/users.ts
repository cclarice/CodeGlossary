import { PROJECT_USER, FILE_USER } from '@/consts/favicons'
import { MAIN_LAYOUT } from '@/consts/layouts'
import { RouteRecordRaw } from 'vue-router'
import tw1n9bun from '@/router/routes/users/tw1n9bun'
import oredan from '@/router/routes/users/oredan'

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
	...oredan,
	...tw1n9bun
]

export default users