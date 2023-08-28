import { CustomRouteRecordRaw } from 'vue-router'
const routes: CustomRouteRecordRaw[] = [
  {
    path: '/auth/:type(login|signup)',
    name: 'AuthView',
    component: () => import('../views/AuthView.vue'),
    props: true,
    meta: {
      requiresAuth: false,
      hideNavBar: true,
    },
  },
]

export default routes
