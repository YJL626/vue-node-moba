import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import { categoryRoutes } from './childRoutes/category'
import { bannerRoutes } from './childRoutes/banner'
import { heroRoutes } from './childRoutes/hero'

const homeRoute: RouteRecordRaw = {
  path: '/',
  component: Home,
  children: [...categoryRoutes, ...bannerRoutes, ...heroRoutes],
  alias: '/home',
}

export { homeRoute }
