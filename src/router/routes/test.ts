import FAVICONS from "@/constants/favicons";

const test = [
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
    path: '/test/two_inputs',
    name: 'TwoInputs',
    component: () => import('@/views/test/TestTwoInputs.vue'),
    meta: {
      title: 'Two Inputs',
      favicon: FAVICONS.TEST,
      layout: 'main'
    }
  },
  {
    path: '/test/SketchFab',
    name: 'SketchFab Test',
    component: () => import('@/views/test/TestSketchFab.vue'),
    meta: {
      title: 'SketchFab',
      favicon: FAVICONS.TEST, // todo add SketchFab favicon
      layout: 'main'
    }
  },
  {
    path: '/test/checkers',
    name: 'Checkers',
    component: () => import('@/views/test/Checkers.vue'),
    meta: {
      title: 'Checkers',
      favicon: FAVICONS.CHECKERS,
      layout: 'main'
    }
  }
]

export default test