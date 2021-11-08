import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TestTypography from '@/views/test/TestTypography.vue'
import TestBalloons from '@/views/test/TestBalloons.vue'
import Tests from '@/views/test/Tests.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
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
    children: [

    ]
  },
  {
    path: '/test/typography',
    name: 'TestTypography',
    component: TestTypography
  },
  {
    path: '/test/balloons',
    name: 'TestBalloons',
    component: TestBalloons
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      layout: 'main'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
