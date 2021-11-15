import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TestTypography from '@/views/test/TestTypography.vue'
import TestBalloons from '@/views/test/TestBalloons.vue'
import Tests from '@/views/test/Tests.vue'

Vue.use(VueRouter)

/* note
*   Мета-тег Title */

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Tests,
    meta: {
      title: 'Tests'
    }
  },
  {
    path: '/test/typography',
    name: 'TestTypography',
    component: TestTypography,
    meta: {
      title: 'Typography'
    }
  },
  {
    path: '/test/balloons',
    name: 'TestBalloons',
    component: TestBalloons,
    meta: {
      title: 'Balloons'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    props: true,
    meta: {
      title: 'Search',
      layout: 'empty'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404',
      layout: 'empty'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Code Glossary'
router.afterEach((to): void => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
