import { createApp } from 'vue'

import router from './router'
import store from './store'
import { loading } from '@ujl/vue-loading'

import AppVue from './App.vue'

import 'tailwindcss/tailwind.css'
import '@/scss/base.scss'
import '@/scss/sprite.scss'
import '@/scss/scoreSprite.scss'
import '@/scss/font-icon/scss/font-awesome.scss'
import 'animate.css'

const app = createApp(AppVue)
app
  .use(store)
  .use(router)
  .use(loading)
  .mount('#app')
