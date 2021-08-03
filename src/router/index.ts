import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '../untils/cache'
import { TOKEN } from '../store/login/constant'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('pages/login/login.vue')
  },
  {
    path: '/home',
    component: () => import('pages/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache(TOKEN)
    if (!token) {
      return '/login'
    }
  }
})

export default router
