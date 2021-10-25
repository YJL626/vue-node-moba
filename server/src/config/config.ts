import dotenv from 'dotenv'
dotenv.config()
const MOBA_DATE_BASE = process.env.MOBA_DATE_BASE || 'mongodb://114.96.84.30:27017'
export { MOBA_DATE_BASE }
