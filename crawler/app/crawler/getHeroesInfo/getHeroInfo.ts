import cheerio from 'cheerio'
import { Browser } from 'puppeteer'
import { heroDetail } from '../../db/dbType'
import { HeroDetailModel } from '../../db/model/hero.model'
import { iPhone } from '../../devices'
import { getHeroInfoUrl } from './handleDataFn/getHeroTargetUrl'
import { handleAddPointRec } from './handleDataFn/handelAddPointRec'
import { handleEquipmentRecs } from './handleDataFn/handelEquipmentRecs'
import { getInfoPicUrl } from './handleDataFn/getInfoPicUrl'
import { handleRunes } from './handleDataFn/handelRunes'
import { handleSkills } from './handleDataFn/handelSkills'
import { handleSkins } from './handleDataFn/handelSkins'
import { handleCategories } from './handleDataFn/handleCategories'
import { handleHeroRelations } from './handleDataFn/handleHeroRelations'
import { handleLearnVideos } from './handleDataFn/handleLearnVideos'
import { handleTips } from './handleDataFn/handleTips'
import { saveToHero } from './handleDataFn/saveToHero'

async function getHeroInfo(index: number, browser: Browser): Promise<void> {
  const page = await browser.newPage()
  await page.emulate(iPhone)
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
    categories: await handleCategories($('.hero-location').text()),
    index: index,
  }).catch(() => console.log('saveToHero ERROR'))
  if (!heroId) {
    console.log('id获取失败')
    return
  }

  const heroDetailData: heroDetail = {
    heroId,
    soccer: {
      difficult: Number($('.cnver4').attr('class')?.slice(-1)) || 10,
      skill: Number($('.cnver3').attr('class')?.slice(-1)) || 10,
      attack: Number($('.cnver2').attr('class')?.slice(-1)) || 10,
      survive: Number($('.cnver1').attr('class')?.slice(-1)) || 10,
    },
    bgcPic: $('.header-hero>img').attr('href') || '',
    skins: await handleSkins($('.hero-skin').attr('href'), browser),
    heroVideo: $('.hero-video>a:nth-child(1)').attr('href') || '',
    skills: await handleSkills($),
    addPointRec: await handleAddPointRec($),
    equipmentRecs: await handleEquipmentRecs($),
    runes: await handleRunes($),
    tips: await handleTips($),
    heroRelations: await handleHeroRelations($),
    learnVideos: await handleLearnVideos($),
    infoPic: await getInfoPicUrl(index),
  }

  return await saveToHeroDetail(heroDetailData).catch((err) => console.log(err))
}
async function saveToHeroDetail(heroDetail: heroDetail) {
  let document = await HeroDetailModel.findOne({
    heroId: heroDetail.heroId,
  }).catch(() => console.log('HeroModel.findOne error'))
  if (document) {
    return document._id
  }
  const model = new HeroDetailModel(heroDetail)
  document = await model.save()
  return document
}
export { getHeroInfo }
