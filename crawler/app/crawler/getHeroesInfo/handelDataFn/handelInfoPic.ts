import { Browser } from 'puppeteer'
const getInfoPicUrl = (index: number) =>
  `https://pvp.qq.com/m/m201706/heropic-detail.shtml?hid=${index}`
const handelInfoPic = async (
  index: number,
  browser: Browser
): Promise<string> => {
  const page = await browser.newPage()
  await page.goto(getInfoPicUrl(index), { waitUntil: 'networkidle0' })
  const result = await page.$eval('.hero-pic', (elem) =>
    elem.getAttribute('src')
  )
  return result ? result : ''
}
export { handelInfoPic }
