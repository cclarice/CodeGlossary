const javascript = [
	{
    path: '/javascript/webgl/triangle',
    name: 'WebGL - Triangle',
    component: () => import('@/views/pages/web/javascript/webgl/WebGLTriangle.vue'),
    meta: {
      title: 'WebGL - Triangle',
      layout: 'main'
    }
  },
  {
    path: '/javascript/webgl/cube',
    name: 'WebGL - Cube',
    component: () => import('@/views/pages/web/javascript/webgl/WebGLCube.vue'),
    meta: {
      title: 'WebGL - Cube',
      layout: 'main'
    }
  }
]

export default javascript