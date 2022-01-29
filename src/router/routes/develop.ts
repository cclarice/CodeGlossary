import { RouteRecordRaw } from 'vue-router'
import { EMPTY_LAYOUT, MAIN_LAYOUT } from '@/consts/layouts'
import { PROJECT_DEV, FILE_DEV, TYPOGRAPHY } from '@/consts/favicons'

const develop: Array<RouteRecordRaw> = [
	{
    path: '/develop',
    name: 'Develop',
    component: () => import('@/views/Explorer.vue'),
    meta: {
      title: 'Develop',
      favicon: PROJECT_DEV,
      parent: '/routes',
      layout: MAIN_LAYOUT
    }
  },
	{
		path: '/develop/typography',
		name: 'Typography',
		component: () => import('@/views/develop/Typography.vue'),
		meta: {
			title: 'Typography',
			favicon: TYPOGRAPHY,
			parent: '/develop',
      layout: MAIN_LAYOUT
		}
	},
	{
		path:      	'/develop/empty',
		name:      	'EmptyLayout',
		component: 	() => import('@/views/Home.vue'),
		meta: {
			title:   	'Home - Empty Layout',
			favicon:  FILE_DEV,
			layout: 	EMPTY_LAYOUT,
			parent:		'/develop'
		}
	},
	{
		path: '/develop/duck',
		name: 'Duck',
		component: () => import('@/views/develop/Ducks.vue'),
		meta: {
			title: 'Typography',
			favicon: FILE_DEV,
			parent: '/develop',
			layout: EMPTY_LAYOUT
		}
	},
	{
		path:				'/develop/large_image',
		name:				'LargeImage',
		component:  () => import('@/views/develop/LargeImage.vue'),
		meta: {
			title: 		'Large Image',
			favicon:  FILE_DEV,
			layout:   MAIN_LAYOUT,
			parent:		'/develop'
		}
	},
	{
		path:				'/develop/navigator',
		name:				'Navigator',
		component:	() => import('@/views/develop/Navigator.vue'),
		meta: {
			title:		'Navigator',
			favicon:  FILE_DEV,
			layout:		MAIN_LAYOUT,
			parent:		'/develop'
		}
	},
	{
		path: 			'/develop/gamepad',
		name:			  'Gamepad',
		component:  () => import('@/views/develop/Gamepad.vue'),
		meta: {
			title:		'Gamepad',
			favicon:  FILE_DEV,
			layout:   MAIN_LAYOUT,
			parent:   '/develop'
		}
	}
]

export default develop