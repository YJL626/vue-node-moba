import { strategyCenterURL } from '@/globalState'
import HomeVue from '@/views/home/Home.vue'
import { RouteRecordRaw } from 'vue-router'
const strategy: RouteRecordRaw = {
  path: '/strategy',
  name: 'strategy',
  beforeEnter() {
    location.href = strategyCenterURL
    return false
    
  },
  component: HomeVue,
}
export default strategy
