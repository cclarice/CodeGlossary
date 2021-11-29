import Vue from 'vue'
import VueRouter from 'vue-router'
import { DEFAULT_TITLE } from '@/constants/titles'
import FAVICONS from '@/constants/favicons'
import routes from '@/router/routes/routes'

Vue.use(VueRouter)

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
