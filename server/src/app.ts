import Koa from 'koa'
import cors from '@koa/cors'

import { composeRouter } from './router/index'
import { errHandle } from './middleware/errorHandle'
import { delay } from './middleware/delay'
import './server/db/registerModel' /* 注册 mongoose model*/
new Koa()
  .on('error', errHandle)
  .use(cors())
  .use(composeRouter)
  .use(delay(500))
  .listen(8000, () => {
    console.log('port:8000')
  })
