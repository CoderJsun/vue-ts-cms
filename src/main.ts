import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerElementPlus } from './global'
import 'element-plus/lib/theme-chalk/base.css'
import skyrequest from './service'

skyrequest
  .get({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })

createApp(App).use(router).use(store).use(registerElementPlus).mount('#app')
