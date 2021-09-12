import dotenv from 'dotenv'
dotenv.config()
const MOBA_DATE_BASE =
  process.env.MOBA_DATE_BASE || 'mongodb://127.0.0.1/moba'
export { MOBA_DATE_BASE }
