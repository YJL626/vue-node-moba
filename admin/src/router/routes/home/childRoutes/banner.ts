import { RouteRecordRaw } from 'vue-router'
const BannerEdit: RouteRecordRaw['component'] = () =>
  import('@/views/banner/BannerEdit.vue')
const BannerList: RouteRecordRaw['component'] = () =>
  import('@/views/banner/BannerList.vue')
const bannerRoutes: RouteRecordRaw[] = [
  { path: 'banner/create', component: BannerEdit },
  {
    path: 'banner/edit',
    component: BannerEdit,
    props: (routes) => routes.query,
  },
  { path: 'banner/list', component: BannerList },
]
export { bannerRoutes }
