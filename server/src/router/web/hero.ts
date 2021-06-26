import Router from '@koa/router'
import body from 'koa-body'
import { heroCtr } from '../../controller/hero.controller'
const heroRouter = new Router({ prefix: '/api/heroes' })

heroRouter.get('/', body(), heroCtr.getHeroes)
heroRouter.get('/:id', heroCtr.getInfoById)

export { heroRouter }
