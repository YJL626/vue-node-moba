import Router from '@koa/router'
import body from 'koa-body'
import { heroCtr } from '../../controller/hero.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
const heroRouter = new Router({ prefix: '/admin/api/heroes' })

heroRouter.get('/', body(), heroCtr.getHeroes)
heroRouter.get('/:id', heroCtr.getInfoById)
heroRouter.post(
  '/:id',
  body(),
  checkCtxProperty({ request: { body: { title: '' } } }),
  heroCtr.updateAndCreate
)
export { heroRouter }
