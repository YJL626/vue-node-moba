import Router from '@koa/router'
import body from 'koa-body'
import { heroCtr } from '../../controller/hero.controller'
import { homeController } from '../../controller/home.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
const homeRouter = new Router({ prefix: '/api/home' })

homeRouter.get(
  '/',
  body(),
  homeController.get
)

export { homeRouter }
