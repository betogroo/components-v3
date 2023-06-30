import { routes as main } from '@/modules/main/router'
import { routes as counter } from '@/modules/counter/router'
import { routes as auth } from '@/modules/auth/router'
import { routes as buy } from '@/modules/buy/router'
const routes = [...main, ...counter, ...auth, ...buy]

export default routes
