import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { DEFAULT_TITLE } from '@/constants/titles'
import { FAVICON_FOLDER_TEST, DEFAULT_FAVICON, FAVICON_COLORS, FAVICON_TEST, FAVICON_404 } from '@/constants/favicons'

Vue.use(VueRouter)

/* note
*   Мета-тег Title */

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
      favicon: FAVICON_FOLDER_TEST,
      layout: 'main'
    }
  },
  {
    path: '/test/typography',
    name: 'Typography',
    component: () => import('@/views/test/TestTypography.vue'),
    meta: {
      title: 'Typography',
      favicon: FAVICON_TEST,
      layout: 'main'
    }
  },
  {
    path: '/test/colors',
    name: 'Colors',
    component: () => import('@/views/test/TestColors.vue'),
    meta: {
      title: 'Colors',
      favicon: FAVICON_COLORS,
      layout: 'main'
    }
  },
  {
    path: '/test/balloons',
    name: 'Balloons',
    component: () => import('@/views/test/TestBalloons.vue'),
    meta: {
      title: 'Balloons',
      favicon: FAVICON_TEST,
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
      favicon: FAVICON_404,
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
  const oldFavicon = document.getElementById('favicon')
  if (oldFavicon) {
    document.head.removeChild(oldFavicon)
  }

  const favicon = document.createElement('link')

  favicon.rel = 'icon'
  favicon.id = 'favicon'
  favicon.href = to.meta.favicon || DEFAULT_FAVICON
  document.head.appendChild(favicon)

  /*** Title */
  document.title = to.meta.title || DEFAULT_TITLE
  next()
})

export default router
