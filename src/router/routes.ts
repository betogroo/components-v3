import { RouteRecordRaw } from 'vue-router'
import CounterView from '@/views/CounterView.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: () => import('@/views/SignupView.vue')
  }
]

export default routes
