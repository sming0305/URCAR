import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar'
import VueSweetalert2 from 'vue-sweetalert2'

import 'vue-step-progress/dist/main.css'
import 'v-calendar/style.css'
import 'animate.css'
import './assets/all.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VCalendar, {})
app.use(VueSweetalert2)

app.mount('#app')
