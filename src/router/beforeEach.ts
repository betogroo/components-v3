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
    if ((to.name === 'LoginView' || to.name == 'SignupView') && isLogged()) {
      next({ name: 'ProfileView' })
    } else {
      next()
    }
  } else {
    if (to.meta.requiresAuth && !isLogged()) {
      next({ name: 'LoginView' })
    } else {
      next()
    }
  }
}
