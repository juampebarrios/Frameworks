import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

//se agrega use(router)
createApp(App).use(router).mount('#app')
