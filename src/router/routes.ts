import { routes as main } from '@/modules/main/router'
import { routes as counter } from '@/modules/counter/router'
import { routes as auth } from '@/modules/auth/router'
import { routes as purchase } from '@/modules/purchase/router'
const routes = [...main, ...counter, ...auth, ...purchase]

export default routes
