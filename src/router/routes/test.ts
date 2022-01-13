import { RouteRecordRaw } from 'vue-router'
import { MAIN_LAYOUT, EMPTY_LAYOUT } from '@/router/routes/consts/layouts'

const develop: Array<RouteRecordRaw> = [
	{
    path: '/develop',
    name: 'Develop',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Develop',
      favicon: require('@/assets/favicons/test.svg'),
      parent: '/',
      layout: MAIN_LAYOUT
    }
  },
	{
		path: '/develop/typography',
		name: 'Typography',
		component: () => import('@/views/test/Typography.vue'),
		meta: {
			title: 'Typography',
			favicon: require('@/assets/favicons/typography.svg'),
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
			favicon: 	require('@/assets/favicons/cmd.svg'),
			layout: 	EMPTY_LAYOUT,
			parent:		'/develop'
		}
	},
	{
		path: '/develop/duck',
		name: 'Duck',
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		component: () => import('@/views/test/Duck.vue'),
		meta: {
			title: 'Typography',
			favicon: require('@/assets/favicons/cmd.svg'),
			parent: '/develop',
			layout: EMPTY_LAYOUT
		}
	},
	{
		path:				'/develop/large_image',
		name:				'LargeImage',
		component:  () => import('@/views/test/LargeImage.vue'),
		meta: {
			title: 		'Large Image',
			favicon:  require('@/assets/favicons/cmd.svg'),
			layout:   MAIN_LAYOUT,
			parent:		'/develop/empty'
		}
	}
]

export default develop