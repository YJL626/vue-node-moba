import puppeteer from 'puppeteer'
import { getHeroInfo } from './getHeroInfo'

import { getHeroIndexList } from './handelDataFn/getHeroIndexList'
const iPhone = puppeteer.devices['iPhone 6']

export const getHeroesInfo = async (): Promise<unknown> => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.emulate(iPhone)
  const heroIndexList = await getHeroIndexList(browser)
  console.log('99999999999')

  await getHeroInfo(113, browser)
  return 10
}
