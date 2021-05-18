import { Next } from 'koa'
import { DATA_FORM_ERROR } from '../constants/errType'
import { anyObject, ctx } from '../type'
import { checkObjectForm } from '../utils/checkObjectForm'
/**
 * @description: 对ctx特定属性进行验证如果不存在则报400 DATA_FORM_ERROR 错误
 * @param {*} model ctx应具有的属性
 * @return {*}验证通过则next,不通过emit error
 */
const checkCtxProperty = (model: anyObject) => {
  return async (ctx: ctx, next: Next): Promise<void> => {
    if (checkObjectForm(model, ctx)) {
      await next()
    } else {
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }
  }
}
export { checkCtxProperty }
