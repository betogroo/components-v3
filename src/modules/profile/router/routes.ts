import { CustomRouteRecordRaw } from 'vue-router'

const routes: CustomRouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'ProfileView',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      requiresAuth: true,
      title: 'Profile',
    },
  },
]

export default routes
