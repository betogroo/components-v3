/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Locale
import { pt } from 'vuetify/locale'

// Composables
import { createVuetify } from 'vuetify'

const formCommonProps = {
  variant: 'outlined',
  hideDetails: true,
  density: 'compact',
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VRow: {
      'no-gutters': true,
    },
    VSelect: { ...formCommonProps },
    VTextField: { ...formCommonProps },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  locale: {
    locale: 'pt',
    messages: { pt },
    fallback: 'pt',
  },
})
