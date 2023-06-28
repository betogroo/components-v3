import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  console.log('to=>', to.name, ' from=>', from.name)
  next()
}
