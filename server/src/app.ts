import { resolve } from 'path'
import Koa from 'koa'
import cors from '@koa/cors'

import { composeRouter } from './router/index'
import { errHandle } from './middleware/errorHandle'
import koaStatic from 'koa-static'
const app = new Koa()
app
  .use(koaStatic(resolve('./static')))
  .on('error', errHandle)
  .use(cors())
  .use(composeRouter)

  .listen(8000, () => {
    console.log('start')
  })
