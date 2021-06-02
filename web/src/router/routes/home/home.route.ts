import Home from '@/views/home/Home.vue'
import { HomeMain } from '@/views/home/homeMain'
import { RouteRecordRaw } from 'vue-router'

import { Component } from '@vue/runtime-core'
const ArticleInfo = (): Promise<Component> =>
  import('@/views/home/article/ArticleInfo.vue')
const ArticleList = (): Promise<Component> =>
  import('@/views/home/article/ArticleList.vue')

const route: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: Home,
  alias: ['/home'],
  children: [
    {
      path: '',
      name: 'homeMain',
      component: HomeMain,
    },
    {
      path: '/article/info',
      name: 'articleInfo',
      component: ArticleInfo,
      props: (route) => route.query,
    },
    {
      path: '/article/list',
      name: 'articleList',
      component: ArticleList,
    },
  ],
}
export default route
