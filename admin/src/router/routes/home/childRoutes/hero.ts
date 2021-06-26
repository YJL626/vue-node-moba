import { Component } from '@vue/runtime-core'
import { RouteRecordRaw } from 'vue-router'

const HeroEdit = (): Component => import('@/views/hero/HeroEdit.vue')
const HeroList = (): Component => import('@/views/hero/HeroList.vue')
const heroRoutes: RouteRecordRaw[] = [
  {
    name: 'heroCreate',
    path: '/hero/create',
    component: HeroEdit,
  },
  {
    name: 'heroList',
    path: '/hero/list',
    component: HeroList,
  },
  {
    name: 'heroEdit',
    path: '/hero',
    component: HeroEdit,
    props: (route) => route.query,
  },
]

export { heroRoutes }
