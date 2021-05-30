import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'
import 'tailwindcss/tailwind.css'
import '@/scss/base.scss'
import '@/scss/sprite.scss'
import '@/scss/font-icon/scss/font-awesome.scss'
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
