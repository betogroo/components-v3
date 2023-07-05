import { CustomRouteRecordRaw } from 'vue-router'
const routes: CustomRouteRecordRaw[] = [
  {
    name: 'PurchaseHome',
    path: '/purchase',
    component: () => import('../views/HomePurchase.vue'),
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
    name: 'DetailsPurchase',
    path: '/purchase/details/:id',
    component: () => import('../views/DetailsPurchase.vue'),
    props: (route) => ({ id: route.params.id }),
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
