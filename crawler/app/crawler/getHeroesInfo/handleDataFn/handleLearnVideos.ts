import { CheerioAPI } from 'cheerio'
import { videoInfo } from '../../../db/dbType'
const handleLearnVideos = async ($: CheerioAPI) => {
  const videoInfos: Array<videoInfo> = []
  console.log($('.raiders-list.strategy-info').length)

  $('.raiders-list.strategy-info>li').each((i, elem) => {
    videoInfos.push({
      title: $(elem).find('.vdbtn-right>p').text(),
      src: $(elem).find('a').attr('href') || '',
      pic: $(elem).find('img').attr('src') || '',
      createTime: $(elem).find('.rd-video-spr.rd-video-fre').text(),
      clickCount: $(elem).find('.rd-video-spr.rd-video-day').text(),
    })
  })

  return videoInfos
}
export { handleLearnVideos }
