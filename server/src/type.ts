import { ParameterizedContext } from 'koa'

type anyObject =
  | Record<string | number | symbol, unknown>
  | Record<string | number, unknown>
type ctx = ParameterizedContext

export { anyObject, ctx }
