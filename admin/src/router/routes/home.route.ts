import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const Create = (): unknown => import('@/views/category/Create.vue')
const List = (): unknown => import('@/views/category/List.vue')
const homeRoute: RouteRecordRaw = {
  path: '/',
  component: Home,
  children: [
    {
      path: '/category/create',
      component: Create,
    },
    {
      path: '/category/list',
      component: List,
    },
  ],
}

export { homeRoute }
