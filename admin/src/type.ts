type formErrFields = {
  field: string
  message: string
  stack: string
}
type ElFormValidate = (
  cb?: (valid: boolean) => void
) => Promise<boolean | formErrFields[]>
type reqState = 'none' | 'pending' | 'success' | 'err'
export { formErrFields, ElFormValidate, reqState }
