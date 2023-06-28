import { createRouter, createWebHistory } from 'vue-router'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import routes from '@/router/routes'

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  console.log('to: ', to.name, 'from: ', from.name)
  next()
}

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})
router.beforeEach(requireAuth)

export default router
