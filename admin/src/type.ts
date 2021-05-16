type formErrFields = {
  field: string
  message: string
  stack: string
}
type ElFormValidate = (
  cb?: (valid: boolean) => void
) => Promise<boolean | formErrFields[]>
export { formErrFields, ElFormValidate }
