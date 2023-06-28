import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { auth } from '@/plugins/firebase'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user = auth.currentUser
  if (to.name === 'LoginView' || to.name === 'SignupView') {
    console.log('to=>', to.name, ' from=>', from.name)
    next()
  } else {
    if (!user) {
      next({ name: 'LoginView' })
    } else {
      console.log('Logado')
      next()
    }
  }
}

/* export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  console.log('to=>', to.name, ' from=>', from.name)
  next()
}
 */
