import { networkState, req, ReqBaseClass } from '.'

type articleCategory = '热门' | '新闻' | '公告' | '活动' | '赛事'
export class GetArticleCtr extends ReqBaseClass {
  private temp: article[] = []
  articles: article[] = []
  pagination: pagination = {
    currentPage: 0,
    size: 0,
    pageCount: 0,
    total: 0,
  }
  isMaxPageCount = false
  private reqOption: reqOption
  private retry = 3
  constructor(reqOption: reqOption, retry = 3) {
    super()
    this.retry = retry
    this.reqOption = reqOption
    this.get()
  }

  private get(): void {
    const { category, size = 10, page = 1 } = this.reqOption
    this.reqOption = { category, size, page }
    this.state = networkState.pending
    req
      .get<response>('/article', { params: { category, size, page } })
      .then((result) => {
        this.state = networkState.success
        //实现懒加载,空数据时需要显式使用loadData才会载入数据
        this.temp.push(...result.data.data)
        this.pagination = result.data.pagination
      })
      .catch(() => {
        this.state = networkState.err
        console.log('GetArticle error')
        if (this.retry <= 0) return
        this.retry--
        this.get()
      })
  }
  getMore = (): void => {
    if (this.state === networkState.pending) return
    if (this.isMaxPageCount) return
    this.reqOption.page++
    this.get()
    if (this.pagination.pageCount <= this.reqOption.page) {
      this.isMaxPageCount = true
    }
  }
  loadData = (): void => {
    this.articles = this.temp
  }
}

type reqOption = { category: articleCategory; size: number; page: number }
interface response {
  data: article[]
  pagination: pagination
}
interface article {
  categories: Category[]
  _id: string
  title: string
  __v: number
  src: string
  time: number
}

interface Category {
  _id: string
  name: string
  parent: string
  __v: number
}
interface pagination {
  currentPage: number
  size: number
  pageCount: number
  total: number
}
