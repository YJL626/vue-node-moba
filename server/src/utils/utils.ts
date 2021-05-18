/* eslint-disable @typescript-eslint/no-var-requires */
import { anyObject } from '../type'

//查看有没有router实例的方法
const isRouter = (router: anyObject): boolean => {
  return !!(router.routes && router.get)
}

export { isRouter }
