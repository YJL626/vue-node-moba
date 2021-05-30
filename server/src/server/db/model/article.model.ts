import { SchemaTypes, Schema } from 'mongoose'
import { mobaDbConnect } from '..'

const articleSchema = new Schema({
  title: { type: String },
  src: String,
  categories: [{ type: SchemaTypes.ObjectId, ref: 'category' }],
  time: String,
})

const articleInfoSchema = new Schema({
  articleId: { type: SchemaTypes.ObjectId, ref: 'news' },
  content: String,
})
const ArticleModel = mobaDbConnect.model('article', articleSchema, 'articles')
const ArticleContentModel = mobaDbConnect.model(
  'articleContent',
  articleInfoSchema,
  'articleContents'
)
export { ArticleModel, ArticleContentModel }
