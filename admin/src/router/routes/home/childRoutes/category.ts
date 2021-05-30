import { RouteRecordRaw } from 'vue-router'

const CreateEdit = (): unknown => import('@/views/category/CategoryEdit.vue')
const List = (): unknown => import('@/views/category/CategoryList.vue')
const categoryRoutes: RouteRecordRaw[] = [
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
]

export { categoryRoutes }
