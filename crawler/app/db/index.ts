import Mongoose from 'mongoose'
import { dbSrc } from '../config'
const mobaDbConnect = Mongoose.createConnection(dbSrc, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
mobaDbConnect.on('open', () => {
  console.log('db open')
})
export { mobaDbConnect }
