import { resolve } from 'path'
import { Next } from 'koa'
import body from 'koa-body'
import Router from 'koa-router'
import { ctx } from '../type'
const router = new Router({ prefix: '/admin/api/upload' })
router.post(
  '/',
  body({
    multipart: true,
    formidable: {
      uploadDir: resolve('./static/picture'),
      keepExtensions: true,
    },
  }),
  async (ctx: ctx, next: Next) => {
    console.log(ctx.request.files)
  }
)
export { router }
