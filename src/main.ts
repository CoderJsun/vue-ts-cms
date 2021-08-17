import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import { globalRegister } from './global'
import 'element-plus/lib/theme-chalk/base.css'
import 'normalize.css'
import './assets/css/index.less'

// 同步本地数据
setupStore()
createApp(App).use(router).use(store).use(globalRegister).mount('#app')
