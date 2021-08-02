import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerElementPlus } from './global'
import 'element-plus/lib/theme-chalk/base.css'
import 'normalize.css'
import './assets/css/index.less'

createApp(App).use(router).use(store).use(registerElementPlus).mount('#app')
