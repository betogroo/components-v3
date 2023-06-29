import 'vue-router'

declare module 'vue-router' {
  interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'name' | 'meta'> {
    name: RouteRecordName
    meta: RouteMeta
  }
  interface RouteMeta {
    requiresAuth: boolean
    /* title: string
    isAdmin?: boolean
    hideNavBar?: boolean
    icon?: string
    showInNavBar?: boolean
    showInDrawer?: boolean */
  }
}
