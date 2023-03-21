import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar'
import VueSweetalert2 from 'vue-sweetalert2'

import 'v-calendar/style.css'
import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VCalendar, {})
app.use(VueSweetalert2)

app.mount('#app')
