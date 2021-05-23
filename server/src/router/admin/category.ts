import Router from 'koa-router'
import { categoryCtr } from '../../controller/category.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
import body from 'koa-body'
const categoryRouter = new Router({ prefix: '/admin/api/categories' })
categoryRouter.post(
  '/',
  body(),
  checkCtxProperty({ request: { body: { name: '', parent: '' } } }),
  categoryCtr.create
)

categoryRouter.get('/', categoryCtr.get)
categoryRouter.get('/:id', categoryCtr.getItem)
categoryRouter.del('/:id', body({ parsedMethods: ['delete'] }), categoryCtr.del)
categoryRouter.put(
  '/:id',
  body({ parsedMethods: ['put'] }),
  checkCtxProperty({ request: { body: { parent: '', name: '' } } }),
  categoryCtr.put
)
export { categoryRouter }
