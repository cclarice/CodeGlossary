import { RouteRecordRaw } from 'vue-router'

const test: Array<RouteRecordRaw> = [
	{
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Test',
      favicon: require('@/assets/favicons/test.svg'),
      parent: '/'
    }
  },
	{
		path: '/test/typography',
		name: 'Typography',
		component: () => import('@/views/test/Typography.vue'),
		meta: {
			title: 'Typography',
			favicon: require('@/assets/favicons/typography.svg'),
			parent: '/test'
		}
	}
]

export default test