import { CustomRouteRecordRaw } from 'vue-router'
const routes: CustomRouteRecordRaw[] = [
  {
    name: 'PurchaseHome',
    path: '/purchase',
    component: () => import('../views/PurchaseHome.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'PurchaseNew',
    path: '/purchase/new',
    component: () => import('../views/PurchaseNew.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'PurchaseView',
    path: '/purchase/:id',
    component: () => import('../views/PurchaseView.vue'),
    props: (route) => ({ id: route.params.id }),
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
