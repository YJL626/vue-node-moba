type validator = (
  rule: unknown,
  value: string,
  cb: (err?: Error) => void
) => void

const required = (errMsg: string): validator => {
  return (_rule, value, cb) => {
    if (value === '') {
      cb(new Error(errMsg))
    } else {
      cb()
    }
  }
}

export { required }
