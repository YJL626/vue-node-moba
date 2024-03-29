import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'

import 'tailwindcss/tailwind.css'

import '@/scss/base.scss'
import '@/scss/mClassUtils.scss'
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
