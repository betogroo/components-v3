import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import useAuth from '@/modules/auth/composables/useAuth'
const { getUser, isLogged } = useAuth()
await getUser()

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  if (!to.meta.requiresAuth) {
    if (to.name === 'AuthView' && isLogged()) {
      next({ name: 'ProfileView' })
    } else {
      next()
    }
  } else {
    if (to.meta.requiresAuth && !isLogged()) {
      next({ path: '/auth/login' })
    } else {
      next()
    }
  }
}
