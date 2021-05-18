import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  name: { type: String, required: true },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'categories',
  },
})
export { categorySchema }
