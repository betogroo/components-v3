import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: () => import('../views/SignupView.vue'),
  },
]

export default routes
