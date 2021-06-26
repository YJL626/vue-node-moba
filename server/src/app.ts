import { resolve } from 'path'
import Koa from 'koa'
import cors from '@koa/cors'

import { composeRouter } from './router/index'
import { errHandle } from './middleware/errorHandle'
import koaStatic from 'koa-static'
import { delay } from './middleware/delay'
import './server/db/registerModel' /* 注册model,避免一部分model没有被注册 */
const app = new Koa()

app
  .use(koaStatic(resolve('./static')))
  .on('error', errHandle)
  .use(cors())
  .use(composeRouter)
  .use(delay(500))
  .listen(8000, () => {
    console.log('start')
  })
