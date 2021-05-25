import cheerio from 'cheerio'
import { handleCategoryData } from './handelDataFn/handleCategoryData'
import { saveToHero } from './handelDataFn/saveToHero'
import { handelSkins } from './handelDataFn/handelSkins'
import { handelHeroVideo } from './handelDataFn/handelHeroVideo'
import { getHeroInfoUrl } from './handelDataFn/getHeroTargetUrl'
import { handelInfoPic } from './handelDataFn/handelInfoPic'
import { Browser } from 'puppeteer'
import { handelSkills } from './handelDataFn/handelSkills'

async function getHeroInfo(index: number, browser: Browser): Promise<void> {
  const page = await browser.newPage()
  const heroInfoUrl = getHeroInfoUrl(index)
  await page.goto(heroInfoUrl, {
    waitUntil: 'networkidle0',
  })

  const htmlData = await page.content()
  page.close()
  const $ = cheerio.load(htmlData)

  const heroId = await saveToHero({
    name: $('.hero-name').text(),
    title: $('.hero-title').text(),
    category: await handleCategoryData($('.hero-location').text()),
    index: index,
  })
  console.log()

  if (!heroId) {
    console.log('id获取失败')

    return
  }

  const heroDetailData = {
    skills: await handelSkills($),
    heroId,
    soccer: {
      difficult: Number($('.cnver1').attr('class')?.slice(-1)),
      skill: Number($('.cnver2').attr('class')?.slice(-1)),
      attack: Number($('.cnver3').attr('class')?.slice(-1)),
      survive: Number($('.cnver4').attr('class')?.slice(-1)),
    },
    bgcPic: $('.header-hero>img').attr('src'),
    skins: await handelSkins($('.hero-skin').attr('href'), browser),
    heroVideo: await handelHeroVideo(heroInfoUrl, browser),
    infoPic: await handelInfoPic(index, browser),
  }
  console.log(heroDetailData)

  await browser.close()
}
export { getHeroInfo }
