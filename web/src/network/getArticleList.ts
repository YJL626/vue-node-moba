import { networkState, req, ReqBaseClass } from '.'

type articleCategory = '热门' | '新闻' | '公告' | '活动' | '赛事'
export class GetArticleCtr extends ReqBaseClass {
  articles: article[] = []
  pagination: pagination = {
    currentPage: 0,
    size: 0,
    pageCount: 0,
    total: 0,
  }
  reqOption!: reqOption
  init: () => void
  constructor(reqOption: reqOption, retry = 3) {
    super()
    let isInit = false
    this.init = () => {
      if (isInit) return
      this.get(reqOption, retry)
      isInit = true
    }
  }

  private get(reqOption: reqOption, retry: number): void {
    const { category, size = 10, page = 1 } = reqOption
    this.reqOption = { category, size, page }
    this.state = networkState.pending
    req
      .get<response>('/article', { params: { category, size, page } })
      .then((result) => {
        this.state = networkState.success
        this.articles.push(...result.data.data)
        this.pagination = result.data.pagination
      })
      .catch(() => {
        this.state = networkState.err
        console.log('GetArticle error')
        if (retry < 0) return
        this.get(this.reqOption, --retry)
      })
  }
  loadMore = async (): Promise<void> => {
    if (this.state === networkState.pending) return
    const reqOption = this.reqOption
    reqOption.page = this.pagination.currentPage + 1
    await this.get(reqOption, 1)
  }
}

type reqOption = { category: articleCategory; size?: number; page?: number }
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
