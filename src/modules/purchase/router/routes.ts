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
    name: 'NewPurchase',
    path: '/purchase/add',
    component: () => import('../views/NewPurchase.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'PurchaseView',
    path: '/purchase/details/:id',
    component: () => import('../views/PurchaseView.vue'),
    props: (route) => ({ id: route.params.id }),
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
