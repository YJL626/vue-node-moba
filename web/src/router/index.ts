import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, { path: '/:a(.*)', redirect: '/' }],
})
router.beforeResolve((to) => {
  if (/^\/\//.test(to.fullPath)) {
    location.href = to.fullPath
    return false
  }
})
export default router
