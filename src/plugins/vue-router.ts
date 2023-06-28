import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/routes'
import beforeEach from '@/router/beforeEach'

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})
router.beforeEach(beforeEach)

export default router
