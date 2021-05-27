import { getHeroesInfo } from './crawler/getHeroesInfo'
import puppeteer from 'puppeteer'
import { closeExcessPage } from './crawler/utils/closeExcessPage'
import { getNews } from './crawler/getNews'
;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  await getHeroesInfo(browser)
  await closeExcessPage(browser, 1)
  await getNews(browser)

  console.log('end')

  process.exit()
})()
