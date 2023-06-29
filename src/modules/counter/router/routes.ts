import { CustomRouteRecordRaw } from 'vue-router'
const routes: CustomRouteRecordRaw[] = [
  {
    path: '/counter',
    name: 'CounterView',
    component: () => import('../views/CounterView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
