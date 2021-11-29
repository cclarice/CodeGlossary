import FAVICONS from '@/constants/favicons'
import { RouteConfig } from 'vue-router'

/** @import other Routes */
import test       from '@/router/routes/test'
import javascript from "@/router/routes/javascript";

/* Todo Добавить мета теги для роботов (поисковиков)
 *                                     ( Google / Yandex )
 */

/**  @routes */
const routes: Array<RouteConfig> = [
  ...test,
  ...javascript,
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/Home.vue'),
    meta: {
      title: 'CodeGlossary',
      layout: 'main',
      description: 'Home page of CodeGlossary Website, Главная страница Сайта CodeGlossary',
      keywords: 'Home, Main, Главная, Домой, CodeGlossary, codeglo, cg, Глоссарий, Code, Glossary, Manual, Мануал'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
      layout: 'main'
    },
    component: () => import('../../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
    props: true,
    meta: {
      title: 'Search',
      layout: 'main'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404',
      favicon: FAVICONS['404'],
      layout: 'main'
    }
  },
  {
    path: '/cmd_chat',
    name: 'Cmd Chat',
    component: () => import('@/views/CmdChat.vue'),
    meta: {
      title: 'Cmd Chat press F11',
      favicon: FAVICONS.CMD,
      layout: 'empty'
    }
  }
]

export default routes