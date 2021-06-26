import { Next } from 'koa'
import mongoose from 'mongoose'
import { CategoryModel } from '../server/db/model/category.model'
import { HeroDetailModel, HeroModel } from '../server/db/model/hero.model'
import { ctx } from '../type'
import { DATA_FORM_ERROR } from '../constants/errType'

class HeroCtr {
  async getHeroes(ctx: ctx, next: Next) {
    try {
      let result
      const category = ctx.query.category || ''
      const categoryId = await CategoryModel.findOne({ name: category })
        .then((document) => document?._id)
        .catch(() => {
          console.log('HeroCtr CategoryModel.findOne error')
          return ''
        })

      if (categoryId) {
        result = await HeroModel.find({ categories: categoryId }).populate(
          'categories'
        )
      } else if (category === '热门英雄') {
        result = await HeroModel.find().populate('categories')
      } else {
        result = await HeroModel.find().populate('categories')
      }
      ctx.body = result
      await next()
    } catch {
      console.log('HeroCtr get error')
      ctx.throw(500)
    }
  }
  async getInfoById(ctx: ctx, next: Next) {
    const id = ctx.params.id || ''
    if (!mongoose.isValidObjectId(id)) {
      return ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }

    const result = await HeroDetailModel.findOne({
      heroId: new mongoose.Types.ObjectId(id),
    })
      .populate('equipmentRecs.smoothly')
      .populate('equipmentRecs.hard')
      .populate('runes')
      .populate({
        path: 'heroId',
        populate: {
          path: 'categories',
          match: { name: /^[^热]/ },
        },
      })
      .catch((err) => {
        console.log(err)
      })
    /*  populate: { path: 'categories' }, */
    if (result) {
      ctx.body = result
      await next()
    } else {
      ctx.body = 'no content'
    }
  }

  async updateAndCreate(ctx: ctx, next: Next) {
    try {
      const id = ctx.params.id || ''
      const { categories, name, title, heroImg } = ctx.request.body || {}
      //仅接受需要的属性
      const model = { categories, name, title, heroImg }
      if (id === 'create') {
        await new HeroModel(model).save().then(() => {
          ctx.body = 'success'
          return next()
        })
        return
      }
      if (mongoose.isValidObjectId(id)) {
        await HeroModel.findByIdAndUpdate(id, model).then(() => {
          ctx.body = 'success'
          return next()
        })
        return
      }
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    } catch (error) {
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }
  }
}
const heroCtr = new HeroCtr()
export { heroCtr }
