import Mongoose from 'mongoose'
const mobaDbConnect = Mongoose.createConnection(
  'mongodb://mobaAdmin:123456@localhost/moba',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)
mobaDbConnect.on('open', () => {
  console.log('db open')
})
export { mobaDbConnect }
