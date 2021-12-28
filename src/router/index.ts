import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void => {
  const favicon: HTMLLinkElement =
    <HTMLLinkElement>document.getElementById('favicon') ||
    <HTMLLinkElement>document.createElement('link')

  if (favicon.id !== 'favicon') {
    favicon.rel = 'icon'
    favicon.id = 'favicon'
    document.head.appendChild(favicon)
  }

  favicon.href = to.meta.favicon || require('@/assets/favicons/favicon.svg')

  /*** Title */
  document.title = to.meta.title || 'CodeGlossary'
  next()
})

export default router
