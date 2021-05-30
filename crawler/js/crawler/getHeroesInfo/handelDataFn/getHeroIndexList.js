"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroIndexList = void 0;
const devices_1 = require("../../../devices");
const getHeroIndexList = async (browser) => {
    const page = await browser.newPage();
    await page.emulate(devices_1.iPhone);
    await page.goto('https://pvp.qq.com/m/', { waitUntil: 'networkidle0' });
    let tryCount = 3;
    while (tryCount > 0) {
        console.log('尝试获取英雄列表');
        const jsonData = await page.evaluate(() => localStorage.getItem('module_exports'));
        if (jsonData) {
            const heroList = JSON.parse(jsonData);
            const indexList = Object.keys(heroList);
            if (indexList.length > 50) {
                console.log('获取成功');
                page.close();
                return indexList.map((value) => +value);
            }
        }
        if (tryCount === 1) {
            console.log('获取失败');
        }
        await page.goto('https://pvp.qq.com/m/', { waitUntil: 'networkidle0' });
        tryCount--;
    }
    return process.exit();
};
exports.getHeroIndexList = getHeroIndexList;
//# sourceMappingURL=getHeroIndexList.js.map