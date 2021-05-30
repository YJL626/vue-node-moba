import { Next } from 'koa'
import { DB_SERVER_ERROR } from '../constants/errType'
import { BannerModel } from '../server/db/model/banner.model'
import { CategoryModel } from '../server/db/model/category.model'
import { ctx } from '../type'

class BannerCtr {
  async get(ctx: ctx, next: Next) {
    try {
      let result
      const categoryDocument = (ctx.query.category as string)
        ? await CategoryModel.findOne({ name: ctx.query.category })
        : null

      if (categoryDocument) {
        result = await BannerModel.find({ category: categoryDocument._id })
      }
      if (!result) {
        result = await BannerModel.find()
      }
      ctx.body = result
      await next()
    } catch {
      console.log('BannerCtr error')
      ctx.app.emit('error', DB_SERVER_ERROR, ctx)
    }
  }
}
const bannerCtr = new BannerCtr()
export { bannerCtr }
