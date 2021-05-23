import puppeteer from 'puppeteer'
import $ from 'cheerio'
try {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://pvp.qq.com/web201605/herodetail/m/113.html', {
      waitUntil: 'networkidle0',
    })
    const htmlData = await page.content()
    const $r = $(htmlData)
    const heroModelData = {
      name: $r.find('.hero-name').text(),
      title: $r.find('.hero-title').text(),
      category:
    }
    console.log(heroModelData)

    await browser.close()
  })()
} catch {
  console.log('err')
}
