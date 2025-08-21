import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.mount('#app')
