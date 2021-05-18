import { ParameterizedContext } from 'koa'

type anyObject = Record<string | number | symbol, unknown>
type ctx = ParameterizedContext

export { anyObject, ctx }
