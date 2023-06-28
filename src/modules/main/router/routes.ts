import { RouteRecordRaw } from 'vue-router'
import { auth } from '@/plugins/firebase'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user = auth.currentUser
  if (!user) {
    next({ name: 'LoginView' })
  } else {
    next()
  }
}
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

export default routes
