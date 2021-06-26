import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
const HeroInfoVue = (): Promise<Component> =>
  import('@/views/hero/heroInfo/HeroInfo.vue')

const heroInfo: RouteRecordRaw = {
  path: '/heroes/:id',
  name: 'heroInfo',
  component: HeroInfoVue,
  props: true,
}
export default heroInfo
