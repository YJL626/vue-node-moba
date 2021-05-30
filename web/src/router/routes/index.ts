import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = []

const routesFolder = require.context('./', true, /route\.\ws$/)
routesFolder.keys().forEach((key) => {
  routes.push(routesFolder(key).default)
})

export { routes }
