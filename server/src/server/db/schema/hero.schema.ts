import { Schema, SchemaTypes } from 'mongoose'
const heroSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    category: [{ type: SchemaTypes.ObjectId, ref: 'category' }],
    soccer: {
      difficult: Number,
      skill: Number,
      attack: Number,
      survive: Number,
    },
    backgroundPic: { type: String },

    introduceVideo: { type: String },
    contentPic: { type: String },

    skills: [
      {
        name: String,
        pic: String,
        delay: String,
        consume: Number,
        info: String,
      },
    ],
  },
  { timestamps: true }
)
export { heroSchema }
