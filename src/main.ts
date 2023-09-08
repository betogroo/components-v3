/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp, App as Application } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//
//test husky

// supabase
//import { supabase } from './plugins/supabase'
//import useAuth from '@/modules/auth/composables/useAuth'
//const { getUser } = useAuth()
//let app: Application

//supabase.auth.onAuthStateChange((event, session) => {
//console.log(event, session)
//getUser()
//if (!app) {
const app: Application = createApp(App)
registerPlugins(app)
app.mount('#app')
//}
//})
