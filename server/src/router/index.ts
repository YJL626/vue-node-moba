import Router from 'koa-router'
import compose from 'koa-compose'
import { anyObject } from '../type'
import { getDirModules } from '../utils/getDirModules'
import { isRouter } from '../utils/utils'
const routers: Array<Router> = getDirModules(__dirname, {
  deep: true,
  excludes: [/^index\./],
}).filter((module) => isRouter(module as anyObject)) as Router[]

const composeRouter = compose(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routers.reduce<any>((acc, item) => {
    acc.push(item.routes(), item.allowedMethods())
    return acc
  }, [])
)
export { composeRouter }
