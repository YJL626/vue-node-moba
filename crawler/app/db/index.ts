import mongoose from 'mongoose'
import { dbSrc, isDrop } from '../config'
console.log('---')
mongoose.set('useFindAndModify', false)

const mobaDbConnect = mongoose.createConnection(dbSrc, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

if (isDrop) {
  console.log(isDrop)

  mobaDbConnect.dropDatabase()
}
mobaDbConnect.on('open', () => {
  console.log('db open')
})
export { mobaDbConnect }
