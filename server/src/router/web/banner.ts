import Router from 'koa-router'
import body from 'koa-body'
import { bannerCtr } from '../../controller/banner.controller'

const bannerRouter = new Router({ prefix: '/api/banner' })
bannerRouter.get('/', body(), bannerCtr.get)
export { bannerRouter }
