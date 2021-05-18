import Koa from 'koa'
import cors from '@koa/cors'
import body from 'koa-body'
import { composeRouter } from './router/index'
import { errHandle } from './middleware/errorHandle'
const app = new Koa()
app
  .on('error', errHandle)
  .use(body())
  .use(composeRouter)
  .use(cors())
  .listen(8000, () => {
    console.log('start')
  })
