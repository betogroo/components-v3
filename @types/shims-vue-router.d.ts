import 'vue-router'

declare module 'vue-router' {
  type CustomRouteRecordRaw = RouteRecordRaw & {
    meta: RouteMeta
    name: RouteRecordName
  }
  interface RouteMeta {
    requiresAuth: boolean
    hideNavBar?: boolean
    /* title: string
    isAdmin?: boolean
    icon?: string
    showInNavBar?: boolean
    showInDrawer?: boolean */
  }
}
