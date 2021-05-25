import { HeroModel } from '../../../db/model/hero.schema'

const saveToHero = async ({
  name,
  title,
  index,
  category,
}: {
  name: string
  title: string
  index: number
  category: Array<string>
}): Promise<string | false> => {
  const result = await HeroModel.findOne({ name })
  if (result) {
    return result._id
  }
  const heroImg = `//game.gtimg.cn/images/yxzj/img201606/heroimg/${index}/${index}.jpg`
  const heroData = { name, title, heroImg, category }
  const model = new HeroModel(heroData)

  const document = await model.save()
  if (document) {
    return document._id
  } else {
    return false
  }
}

export { saveToHero }
