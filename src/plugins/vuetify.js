/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          marromPrincipal: '#6a3d31',
          marromSecundario: '#FFF3F0',
          laranja: '#fd683e',
          cinza: '#fbfbfb',
          branco: '#ffffff',
          verdeClaro: '#90ee90',
          verde: '#008000',
          vermelho: '#f44336',
          rosa: '#f1388b',
        }
      }
    }
  },
})
