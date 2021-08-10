import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useLocalCache } from 'ofi-hooks'
import { TOKEN } from '../store/login/constant'
import { firstMenu } from '@/untils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/main/home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('pages/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = useLocalCache.getCache(TOKEN)
    if (!token) {
      return '/login'
    }
  }

  // 进入的默认模块
  if (to.path === '/home') {
    return firstMenu.url
  }
})

export default router
