import { CustomRouteRecordRaw } from 'vue-router'
const routes: CustomRouteRecordRaw[] = [
  {
    name: 'BuyHome',
    path: '/buy',
    component: () => import('../views/HomeBuy.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'NewBuy',
    path: '/buy/add',
    component: () => import('../views/NewBuy.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
