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

// supabase
import { supabase } from './plugins/supabase'
import useAuth from '@/modules/auth/composables/useAuth'
const { getUser } = useAuth()
let app: Application

supabase.auth.onAuthStateChange((event) => {
  console.log('onAuth', event)
  //getUser()
  if (!app) {
    app = createApp(App)
    registerPlugins(app)
    app.mount('#app')
  }
})
