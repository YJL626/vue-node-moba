import { Next } from 'koa'
import { DATA_FORM_ERROR } from '../constants/errType'
import { HomeHeroBannerModel } from '../server/db/model/homeHeroBanner.model'
import { HomeVideosModel } from '../server/db/model/homeVideo.model'
import { ctx } from '../type'
type query = {
  type?: 'video' | 'heroRec'
}
class HomeController {
  private async _getVideo() {
    return await HomeVideosModel.find().catch((err) => {
      console.log(err)
      return 'get error'
    })
  }
  private async _getHeroRec() {
    return await HomeHeroBannerModel.findOne().catch((err) => {
      console.log(err)
      return 'get error'
    })
  }
  get = async (ctx: ctx, next: Next) => {
    const type = (ctx.request.query as query).type || ''
    let result
    switch (type) {
      case 'video':
        result = await this._getVideo()
        break
      case 'heroRec':
        result = await this._getHeroRec()
        break
      case '':
        result = {
          video: await this._getVideo(),
          heroRec: await this._getHeroRec(),
        }
        break
      default:
        return ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }
    if (!result) ctx.throw(type + '_is_not_found', 404)
    ctx.body = result
    await next()
  }
}

const homeController = new HomeController()
export { homeController }
