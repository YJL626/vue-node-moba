import { Browser } from 'puppeteer'
import { isTest, pageCount } from '../../config'
import { closeExcessPage } from '../utils/closeExcessPage'
import { getArticleInfo } from './getArticlesInfo'
import { getNewsList } from './getArticleList'

const getNews = async (browser: Browser) => {
  //这个没有直接存入db getInfo时一并存入
  const newsList = await getNewsList(browser)
  console.log(`${newsList.length} 条news`)
  console.log('获取详情......')
  let len = newsList.length
  let runningList = []
  while (len) {
    console.log(len)
    if (isTest) {
      console.log('--')

      await getArticleInfo(browser, newsList[0])
      break
    }
    // 并行执行多个
    runningList.push(getArticleInfo(browser, newsList[--len]))
    if (runningList.length >= pageCount) {
      await Promise.allSettled(runningList)
      await closeExcessPage(browser, 1)
      runningList = []
    }
  }
}
export { getNews }
