type validator = (
  rule: unknown,
  value: string,
  cb: (err: Error) => void
) => void

const required = (errMsg: string): validator => {
  return (_rule: unknown, value: string, cb: (err: Error) => void) => {
    console.log('--')

    if (value === '') {
      cb(new Error(errMsg))
    }
  }
}

export { required }
