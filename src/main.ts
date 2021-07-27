import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerElment } from './global'
// import 'element-plus/packages/theme-chalk/src/base.scss'

createApp(App).use(router).use(store).use(registerElment).mount('#app')
