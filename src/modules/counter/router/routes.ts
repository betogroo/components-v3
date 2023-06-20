import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/counter',
    name: 'CounterView',
    component: () => import('../views/CounterView.vue'),
  },
]

export default routes
