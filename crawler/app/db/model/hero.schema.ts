import { mobaDbConnect } from '..'
import { Schema, SchemaTypes } from 'mongoose'
const heroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: true },
  category: [{ type: SchemaTypes.ObjectId, ref: 'category' }],
  heroImg: { type: String },
})

const heroDetailSchema = new Schema(
  {
    heroId: { type: SchemaTypes.ObjectId, ref: 'hero' },
    soccer: {
      difficult: Number,
      skill: Number,
      attack: Number,
      survive: Number,
    },
    bgcPic: { type: String },
    skins: [{ name: String, pic: String }],
    heroVideo: { type: String },
    infoPic: String,
    skills: [
      {
        name: String,
        pic: String,
        info: String,
        plusValue: String,
      },
    ],
  },
  { timestamps: true }
)
const HeroDetailModel = mobaDbConnect.model(
  'heroDetail',
  heroDetailSchema,
  'heroDetails'
)
const HeroModel = mobaDbConnect.model('hero', heroSchema, 'heroes')
export { HeroModel, HeroDetailModel }
