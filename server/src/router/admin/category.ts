import Router from 'koa-router'
import { categoryCtr } from '../../controller/category.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
const categoryRouter = new Router({ prefix: '/admin/api/category' })
categoryRouter.post(
  '/',
  checkCtxProperty({ request: { body: { name: '' } } }),
  categoryCtr.create
)
categoryRouter.get('/', categoryCtr.get)
export { categoryRouter }
