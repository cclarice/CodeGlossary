import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import vLog from './directives/log'
import vScrollable from './directives/scrollable'

createApp(App)
  .directive('scrollable', vScrollable)
  .directive('log', vLog)
  .use(router)
  .use(pinia)
  .mount('#codeglo')
