import { Next } from 'koa'
import { DATA_FORM_ERROR, DB_SERVER_ERROR } from '../constants/errType'
import { categoryServer } from '../server/category.server'
import { ctx } from '../type'
class CategoryCtr {
  async create(ctx: ctx, next: Next) {
    const result = await categoryServer.create(ctx.request.body)
    if (result) {
      ctx.status = 200
      ctx.body = '创建成功'
      await next()
    } else {
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }
  }
  async get(ctx: ctx, next: Next) {
    try {
      const result = await categoryServer.get()
      ctx.body = result
      await next()
    } catch {
      ctx.app.emit('error', DB_SERVER_ERROR, ctx)
    }
  }
}
const categoryCtr = new CategoryCtr()
export { categoryCtr }
