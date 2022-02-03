import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
	.use(router)
	.mount('#app')

console.log(`CodeGlossary 0.1.2 | Vue ${app.version}`)
