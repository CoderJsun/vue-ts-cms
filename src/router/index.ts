import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

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

export default router
