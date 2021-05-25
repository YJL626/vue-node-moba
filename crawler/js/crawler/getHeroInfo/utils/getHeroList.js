"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroList = void 0;
const getHeroList = async (browser) => {
    const page = await browser.newPage();
    await page.goto('https://pvp.qq.com/m/', { waitUntil: 'networkidle0' });
    while (true) {
        console.log('尝试获取英雄列表');
        const heroList = page.$eval('', () => localStorage.getItem('module_exports'));
        console.log(heroList);
        break;
    }
};
exports.getHeroList = getHeroList;
//# sourceMappingURL=getHeroList.js.map