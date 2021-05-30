import Mongoose from 'mongoose'
import { MOBA_DATE_BASE } from '../../config/config'
const mobaDbConnect = Mongoose.createConnection(MOBA_DATE_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

mobaDbConnect.on('open', () => {
  console.log('db open')
})
export { mobaDbConnect }
