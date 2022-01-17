import { FILE_USER } from '@/consts/favicons'
import { EMPTY_LAYOUT, MAIN_LAYOUT } from '@/consts/layouts'
import { RouteRecordRaw } from 'vue-router'

const tw1n9bun: Array<RouteRecordRaw>  = [
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
  {
    path: '/users/tw1n9bun/cat',
    name: 'ganinHTML',
    component: () => import('@/views/HTMLViewer.vue'),
    meta: {
      title: 'CAT',
      favicon: FILE_USER,
      parent: '/users/tw1n9bun',
      layout: MAIN_LAYOUT
    },
    props: {
      html: 'https://localhost:6367/ganin/html.html'
    }
  }
]

export default tw1n9bun