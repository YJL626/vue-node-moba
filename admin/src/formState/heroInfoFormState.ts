import { req } from '@/network'
import { ReactiveClass } from '@/type'
import { extend } from 'lodash'

type HeroInfoModel = {
  categories: string[]
  _id?: string
  name: string
  title: string
  heroImg: string
}

class HeroInfoFormState extends ReactiveClass {
  model: HeroInfoModel = {
    categories: [],
    name: '',
    title: '',
    heroImg: '',
  }
  rules = {
    categories: [{ required: true, message: '分类不能为空' }],
    name: [{ required: true, message: '名字不能为空' }],
    title: [{ required: true, message: '称号不能为空' }],
    heroImg: [{ required: true, message: '图片链接不能为空' }],
  }
  constructor(id?: string) {
    super()
    if (!id) return this
    req
      .get<Required<HeroInfoModel>>('/heroes/' + id)
      .then(({ data: modelData }) => {
        this.model = modelData
        console.log(this)
      })
  }
}
export { HeroInfoFormState }
