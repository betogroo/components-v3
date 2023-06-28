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

const app: Application = createApp(App)

registerPlugins(app)

app.mount('#app')
