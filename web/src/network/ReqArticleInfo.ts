import { networkState, req, ReqBaseClass } from '.'

class ReqArticleInfo extends ReqBaseClass {
  articleData: articleData = {} as articleData
  constructor(reqOption: { id: string }, reTry = 3) {
    super()
    this.get(reqOption, reTry)
  }
  private async get({ id }: { id: string }, reTry = 3) {
    this.state = networkState.pending
    const result = await req.get<articleData>(`/article/${id}`).catch(() => {
      this.state = networkState.err
      console.log('ReqArticleInfo err')
      if (reTry > 0) this.get({ id }, --reTry)
    })
    if (!result) return
    this.state = networkState.success
    this.articleData = result.data
  }
}
export { ReqArticleInfo }
interface articleData {
  _id: string
  title: string
  __v: number
  categories: string[]
  src: string
  time: number
  articleInfo: string
}
