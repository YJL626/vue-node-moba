import puppeteer from 'puppeteer'
import { isTest, pageCount } from '../../config'
import { closeExcessPage } from '../utils/closeExcessPage'
import { getHeroInfo } from './getHeroInfo'

import { getHeroIndexList } from './handleDataFn/getHeroIndexList'

const getHeroesInfo = async (): Promise<unknown> => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const heroIndexList = await getHeroIndexList(browser)

  let runningList: Array<Promise<unknown>> = []
  /* await getHeroInfo(115, browser) */
  for (let i = 0; i < heroIndexList.length; i++) {
    console.log(`index${i}`)

    if (isTest) {
      await runningList.push(getHeroInfo(heroIndexList[i], browser))
      process.exit()
    }
    runningList.push(getHeroInfo(heroIndexList[i], browser))
    // 向队列推入任务,圈闭执行完成后再继续执行
    if (runningList.length >= pageCount) {
      await Promise.allSettled(runningList)
      await closeExcessPage(browser)
      runningList = []
    }
  }
  await Promise.allSettled(runningList)
  return 0
}
export { getHeroesInfo }
