import { reactive } from 'vue-demi'

type formErrFields = {
  field: string
  message: string
  stack: string
}
type ElFormValidate = (
  cb?: (valid: boolean) => void
) => Promise<boolean | formErrFields[]>
type reqState = 'none' | 'pending' | 'success' | 'err'
class ReactiveClass {
  constructor() {
    return reactive(this)
  }
}
export { formErrFields, ElFormValidate, reqState, ReactiveClass }
