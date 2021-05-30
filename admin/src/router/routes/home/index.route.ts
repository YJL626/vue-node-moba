import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import { categoryRoutes } from './childRoutes/category'
import { bannerRoutes } from './childRoutes/banner'

const homeRoute: RouteRecordRaw = {
  path: '/',
  component: Home,
  children: [...categoryRoutes, ...bannerRoutes],
  alias: '/home',
}

export { homeRoute }
