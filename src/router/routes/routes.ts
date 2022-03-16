const routes = [
  {
    path: '/',
    name: 'CodeGlossary',
    component: () => import('@/views/Home.vue')
    meta: {
      title: 'CodeGlossary',
      parent: null,
      favicon: '',
      layout: 'MainLayout'
    }
  }
]

export default routes
