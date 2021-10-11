import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TypographyTest from "@/views/test/TypographyTest.vue";
import NotificationsTest from '@/views/test/NotificationsTest.vue'
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
    component: Tests
  },
  {
    path: '/test/typography',
    name: 'Typography',
    component: TypographyTest
  },
  {
    path: '/test/notifications',
    name: 'Notifications',
    component: NotificationsTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
