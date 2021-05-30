import Router from 'koa-router'
import { categoryCtr } from '../../controller/category.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
import body from 'koa-body'
import { bannerCtr } from '../../controller/banner.controller'

const bannerRouter = new Router({ prefix: '/api' })
bannerRouter.get('/banner', body(), bannerCtr.get)
export { bannerRouter }
