import { createApp } from 'vue'
import App from './app.view.vue'
import router from './router'
import store from './store'

import '@/assets/css/index.css'

createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
