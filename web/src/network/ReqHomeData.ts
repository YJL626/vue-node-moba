import { MaybeRef } from '@vueuse/core'
import { shallowRef } from 'vue'
import { req, ReqBaseClass } from '.'

class ReqHomeData extends ReqBaseClass {
  result: MaybeRef<result> = {} as result
  private _getResult = (retry: number) => {
    this._setStatePending()
    req
      .get<result>('/home')
      .then(({ data }) => {
        this._setStateSuccess()
        this.result = shallowRef(data)
      })
      .catch(() => {
        console.log('_getResult error ' + retry)
        if (--retry >= 0) {
          this._getResult(retry)
        } else {
          this._setStateErr()
        }
      })
  }
  constructor(option: { retry?: number } = {}) {
    super()
    const retry = option.retry || 3
    this._getResult(retry)
  }
}
const reqHomeData = new ReqHomeData()
interface result {
  video: Video[]
  heroRec: HeroRec
}

interface HeroRec {
  _id: string
  pic: string
  heroId: string
  __v: number
}

interface Video {
  _id: string
  index: number
  videos: VideoInfo[]
  name: string
  __v: number
}

interface VideoInfo {
  _id: string
  title: string
  src: string
  pic: string
  createTime: string
  clickCount: string
}
export type {
  ReqHomeData
}
export { reqHomeData,VideoInfo  }
