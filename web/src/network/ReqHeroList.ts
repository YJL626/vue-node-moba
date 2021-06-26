import { networkState, req, ReqBaseClass } from '.'

/**
 *
 *
 * @class ReqHeroList 创建时传入传入请求参数{ category?: string },如果不传则为获取所有数据.请求的数据存入内部的_heroes 使用loadData 才会加载数据
 * @extends {ReqBaseClass}
 */
class ReqHeroList extends ReqBaseClass {
  heroes: Array<hero> = []
  //实现懒加载
  private _heroes: Array<hero> = []
  private reqOption: { category?: string } = {}
  private retry = 3
  constructor(reqOption?: { category?: string }, retry = 3) {
    super()
    this.retry = retry
    if (reqOption) {
      this.reqOption = reqOption
    }
    this.get()
  }
  private get = () => {
    this.state = networkState.pending
    req
      .get<Array<hero>>('/heroes', { params: this.reqOption })
      .then((result) => {
        this.state = networkState.success
        // 通过_heroes存储
        //执行过loadData才会被显式的暴露出来
        this._heroes.push(...result.data)
      })
      .catch(() => {
        this.state = networkState.err
        console.log('ReqHeroList error')
        if (this.retry <= 0) return
        this.retry--
        this.get()
      })
  }
  loadData = (): ReqHeroList => {
    this.heroes = this._heroes
    return this
  }
}
interface hero {
  categories: Category[]
  _id: string
  name: string
  title: string
  heroImg: string
  __v: number
}

interface Category {
  _id: string
  name: string
  parent: string
  __v: number
}
export { ReqHeroList, hero }
