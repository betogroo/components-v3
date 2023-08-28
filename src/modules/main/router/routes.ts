import { CustomRouteRecordRaw } from 'vue-router'

const routes: CustomRouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      requiresAuth: false,
    },
  },
]

export default routes
