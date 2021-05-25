import cheerio from 'cheerio/lib/cheerio'
import puppeteer, { Browser } from 'puppeteer'

const handelHeroVideo = async (heroInfoUrl: string, browser: Browser) => {
  const page = await browser.newPage()
  try {
    await page.emulate(puppeteer.devices['iPhone 6'])
    await page.goto(heroInfoUrl, { waitUntil: 'networkidle0' })
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
      page.click('.video-play'),
      page.waitForSelector('#VideoIframe', { timeout: 8000 }),
    ])

    const videoIframe = await page
      .frames()
      .find((frame) => frame.name() === 'VideoIframe')

    if (!videoIframe) return ''
    await videoIframe.waitForSelector('.tvp_mp4_link', { timeout: 8000 })

    const src = await videoIframe.$eval('.tvp_mp4_link', (elem) =>
      elem.getAttribute('href')
    )
    page.close()
    return src
  } catch {
    console.log('GET hero video err')
    page.close()
    return ''
  }
}
export { handelHeroVideo }
