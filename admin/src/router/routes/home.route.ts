import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const CreateEdit = (): unknown => import('@/views/category/CreateEdit.vue')
const List = (): unknown => import('@/views/category/List.vue')
const homeRoute: RouteRecordRaw = {
  path: '/',
  component: Home,
  children: [
    {
      name: 'createCategory',
      path: '/category/create',
      component: CreateEdit,
    },
    {
      name: 'categoryList',
      path: '/category/list',
      component: List,
    },
    {
      name: 'editCategory',
      path: '/category/list',
      component: CreateEdit,
      props: (route) => route.query,
    },
  ],
}

export { homeRoute }
