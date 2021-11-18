import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { DEFAULT_TITLE } from '@/constants/titles'
import FAVICONS from '@/constants/favicons'

Vue.use(VueRouter)

/* Todo Добавить мета теги для роботов (поисковиков)
 *                                     ( Google / Yandex )
 */

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/Tests.vue'),
    meta: {
      title: 'Tests',
      favicon: FAVICONS.FOLDER_TEST,
      layout: 'main'
    }
  },
  {
    path: '/test/typography',
    name: 'Typography',
    component: () => import('@/views/test/TestTypography.vue'),
    meta: {
      title: 'Typography',
      favicon: FAVICONS.TEST,
      layout: 'main'
    }
  },
  {
    path: '/test/colors',
    name: 'Colors',
    component: () => import('@/views/test/TestColors.vue'),
    meta: {
      title: 'Colors',
      favicon: FAVICONS.COLORS,
      layout: 'main'
    }
  },
  {
    path: '/test/balloons',
    name: 'Balloons',
    component: () => import('@/views/test/TestBalloons.vue'),
    meta: {
      title: 'Balloons',
      favicon: FAVICONS.TEST,
      layout: 'main'
    }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next): void => {
  /*** Favicon */
  const oldFavicon = document.getElementById('favicon')                // Пытаемся найти favicon

  if (oldFavicon) {                                                             // Удаляем favicon если он есть
    document.head.removeChild(oldFavicon)
  }

  const favicon = document.createElement('link')                        // Создаем новый favicon

  favicon.rel = 'icon'
  favicon.id = 'favicon'
  favicon.href = to.meta.favicon || FAVICONS.DEFAULT
  document.head.appendChild(favicon)                                            // Добавляем его в <head>

  /*** Title */
  document.title = to.meta.title || DEFAULT_TITLE
  next()
})

export default router
