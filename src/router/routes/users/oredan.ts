import { RouteRecordRaw } from 'vue-router'
import { FILE_USER } from '@/consts/favicons'
import { MAIN_LAYOUT } from '@/consts/layouts'

const oredan: Array<RouteRecordRaw> = [
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
    path: '/users/oredan/nested_circles',
    name: 'Oredan - Nested Circles',
    component: () => import('@/views/HTMLViewer.vue'),
    meta: {
      title: 'Oredan',
      favicon: FILE_USER,
      parent: '/users/oredan',
      layout: MAIN_LAYOUT
    },
    props: {
      html: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/cclarice/frontend_nested_circle/master/index.html'
    }
  },
	{
    path: '/users/oredan/sort_circles',
    name: 'Oredan - Sort Circles',
    component: () => import('@/views/HTMLViewer.vue'),
    meta: {
      title: 'Oredan',
      favicon: FILE_USER,
      parent: '/users/oredan',
      layout: MAIN_LAYOUT
    },
    props: {
      html: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/cclarice/frontend_sort_circles/master/index.html',
      backgroundColor: 'white'
    }
  }
]

export default oredan