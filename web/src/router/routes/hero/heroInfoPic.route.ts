import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
const HeroInfoPicVue = (): Promise<Component> =>
  import('@/views/hero/heroInfo/childComponents/HeroInfoInfoPic.vue')
const heroInfo: RouteRecordRaw = {
  name: 'HeroInfoInfoPic',
  path: '/hero-info-pic',
  component: HeroInfoPicVue,
  props: (route): Record<string, unknown> => route.query,
}
export default heroInfo
