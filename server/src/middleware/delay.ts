import { Middleware, Next } from 'koa'
import { ctx } from '../type'

const delay = (delay: number): Middleware => {
  return async (ctx: ctx, next: Next) => {
    await new Promise((resolve) => setTimeout(resolve, delay))
    await next()
  }
}
export { delay }
