import { log } from 'console'
import { ParameterizedContext } from 'koa'
import { constantError } from '../constants/errType'

const errHandle = async (
  err: constantError,
  ctx: ParameterizedContext
): Promise<void> => {
  try {
    if (err.msg && err.stateCode) {
      ctx.status = err.stateCode
      ctx.body = err.msg
    } else {
      ctx.status = 404
      ctx.body = 'err not found'
    }
  } catch {
    console.log('请传递,constantError,ParameterizedContext')
  }
}

export { errHandle }
