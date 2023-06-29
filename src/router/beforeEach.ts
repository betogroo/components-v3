import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import useAuth from '@/modules/auth/composables/useAuth'
const { user } = useAuth()

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  if (!to.meta.requiresAuth) {
    next()
  } else {
    if (to.meta.requiresAuth && !user.value) {
      next({ name: 'LoginView' })
    } else {
      next()
    }
  }
}
