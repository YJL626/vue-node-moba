import { Next } from 'koa'
import mongoose from 'mongoose'
import { DATA_FORM_ERROR } from '../constants/errType'
import {
  ARTICLE_ID_IS_NOT_EXISTS,
  PARAMS_IS_NOT_ID,
} from '../router/errorMsg/articleErrorMsg'
import { ArticleModel } from '../server/db/model/article.model'
import { CategoryModel } from '../server/db/model/category.model'
import { ctx } from '../type'

class ArticleCtr {
  async getArticle(ctx: ctx, next: Next) {
    const category = ctx.query.category || '',
      size = Number(ctx.query.size) || 10,
      page = Number(ctx.query.page) || 1

    const skip = size * (page - 1),
      categoryId = await CategoryModel.findOne({ name: category })
        .then((document) => document?._id)
        .catch(() => '')

    if (!category || !categoryId) {
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
      return
    }
    const articleLen = (await ArticleModel.find({ categories: categoryId }))
      .length

    const result = await ArticleModel.find({ categories: categoryId })
      .sort({ time: -1, _id: -1 })
      .skip(skip)
      .limit(size)
      .populate('categories')
      .catch(() => {
        console.log('ArticleCtr.getArticle :ArticleModel error ')
        ctx.throw(400)
      })
    ctx.body = {
      data: result,
      pagination: {
        currentPage: page,
        size,
        pageCount: Math.ceil(articleLen / size),
        total: articleLen,
      },
    }
    await next()
  }
  async getArticleInfo(ctx: ctx, next: Next) {
    try {
      const articleId = ctx.params.id
      const result = await ArticleModel.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(articleId) } },
        {
          $lookup: {
            from: 'articleContents',
            localField: '_id',
            foreignField: 'articleId',
            as: 'articleInfo',
          },
        },
        {
          $set: {
            articleInfo: { $first: '$articleInfo.content' },
          },
        },
      ]).then((result) => result[0])
      if (result) {
        ctx.body = result
        await next()
      } else {
        ctx.app.emit('error', ARTICLE_ID_IS_NOT_EXISTS, ctx)
      }
    } catch (err) {
      ctx.app.emit('error', PARAMS_IS_NOT_ID, ctx)
      console.log(err)
    }
  }
}
const articleCtr = new ArticleCtr()
export { articleCtr }
