import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router).mount('#app')

export { app }