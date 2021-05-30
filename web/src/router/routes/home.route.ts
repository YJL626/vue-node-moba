import Home from '@/views/home/Home.vue'
import { RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: Home,
  alias: ['/home'],
}
export default route
