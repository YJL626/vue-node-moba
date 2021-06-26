import Router from 'koa-router'
import body from 'koa-body'
import { articleCtr } from '../../controller/article.controller'
import { checkCtxProperty } from '../../middleware/checkCtxProp'
const router = new Router({ prefix: '/api/article' })
router.get('/', body(), articleCtr.getArticle)
router.get(
  '/:id',
  body(),
  checkCtxProperty({ params: { id: '' } }),
  articleCtr.getArticleInfo
)

export default router
