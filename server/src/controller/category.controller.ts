import { Next } from 'koa'
import {
  DATA_FORM_ERROR,
  DB_SERVER_ERROR,
  DEL_ERROR,
  PUT_ERROR,
  CATEGORY_ID_IS_NOT_EXISTS,
} from '../constants/errType'
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
  async getItem(ctx: ctx, next: Next) {
    const id = ctx.params.id as string
    const result = await categoryServer.getItemById({ id })
    if (result) {
      ctx.body = result
      await next()
    } else {
      ctx.app.emit('error', CATEGORY_ID_IS_NOT_EXISTS, ctx)
    }
  }
  async del(ctx: ctx, next: Next) {
    const id = ctx.params.id as string
    const result = await categoryServer.del({ id })
    if (result) {
      ctx.body = '删除成功'
      await next()
    } else {
      ctx.app.emit('error', DEL_ERROR, ctx)
    }
  }
  async put(ctx: ctx, next: Next) {
    const id = ctx.params.id
    const { parent, name } = ctx.request.body
    console.log(id)

    const result = await categoryServer.replace({ id, parent, name })
    if (result) {
      ctx.body = '修改成功'
      await next()
    } else {
      ctx.app.emit('error', PUT_ERROR, ctx)
    }
  }
}
const categoryCtr = new CategoryCtr()
export { categoryCtr }
