import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
const HeroInfoSkinsVue = (): Promise<Component> =>
  import('@/views/hero/heroInfo/childComponents/HeroInfoSkins.vue')
const heroInfo: RouteRecordRaw = {
  name: 'HeroInfoSkins',
  path: '/hero-info-skins/:skins',
  component: HeroInfoSkinsVue,
  props: true,
}
export default heroInfo
