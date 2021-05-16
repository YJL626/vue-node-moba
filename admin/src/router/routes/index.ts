import { RouteRecordRaw } from 'vue-router'
/* 读取当前目录下的 route文件 需以.route.(t,j)s 结尾*/
const routeModules = require.context('./', true, /\.route\.[j,t]s$/)

const routes: Array<RouteRecordRaw> = []
//推入routes
routeModules.keys().forEach((key) => {
  const route = Object.values<RouteRecordRaw>(routeModules(key))
  routes.push(...route)
})

export { routes }
