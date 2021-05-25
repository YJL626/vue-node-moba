"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelInfoPic = void 0;
const getInfoPicUrl = (index) => `https://pvp.qq.com/m/m201706/heropic-detail.shtml?hid=${index}`;
const handelInfoPic = async (index, browser) => {
    const page = await browser.newPage();
    await page.goto(getInfoPicUrl(index), { waitUntil: 'networkidle0' });
    const result = await page.$eval('.hero-pic', (elem) => elem.getAttribute('src'));
    return result ? result : '';
};
exports.handelInfoPic = handelInfoPic;
//# sourceMappingURL=handelInfoPic.js.map