import Koa from 'koa'
import cors from '@koa/cors'
const app = new Koa()
app.use(cors())
app.listen(8000, () => {
  console.log('start')
})
