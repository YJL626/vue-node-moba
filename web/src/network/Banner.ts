import { networkState, req, ReqBaseClass } from '.'
interface banner {
  _id: string
  pic: string
  name: string
  index: number
  src: string
  category: string
  __v: number
}

class GetBanner extends ReqBaseClass {
  banners: Array<banner> = []
  constructor(option: { category?: 'homeBanner' }) {
    super()
    this.state = networkState.pending
    const category = option.category
    req
      .get('/banner', { params: category })
      .then((result) => {
        this.state = networkState.success
        console.log(result.data)

        this.banners = result.data
      })
      .catch(() => {
        this.state = networkState.err
      })
  }
}
export { GetBanner }
