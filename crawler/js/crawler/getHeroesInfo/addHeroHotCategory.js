"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHeroHotCategory = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const config_1 = require("../../config");
const hero_model_1 = require("../../db/model/hero.model");
const closeExcessPage_1 = require("../utils/closeExcessPage");
const getCategoryId_1 = require("../utils/getCategoryId");
async function addHeroHotCategory(browser) {
    const pendingPromise = [];
    const page = await browser.newPage();
    await page.emulate(config_1.iPhone);
    console.log('999999999');
    await page.goto('https://pvp.qq.com/m/', config_1.pageOption);
    await page.evaluate(() => {
        document.querySelector('.hero-slide-wrapper')?.scrollIntoView();
    });
    await page.waitForTimeout(2000);
    const $ = cheerio_1.default.load(await page.content());
    const heroId = await (0, getCategoryId_1.getCategoryId)({ name: '英雄' }, { create: true });
    const hotHeroCategoryId = await (0, getCategoryId_1.getCategoryId)({ name: '热门英雄', parent: heroId }, { create: true });
    console.log(hotHeroCategoryId);
    $('.hero-slide-wrapper li').each((i, elem) => {
        const HeroName = $(elem).find('h3').text();
        console.log(HeroName);
        if (!HeroName)
            return;
        pendingPromise.push(hero_model_1.HeroModel.findOneAndUpdate({ name: HeroName }, { $push: { categories: hotHeroCategoryId } }).catch(() => {
            console.log('addHeroHotCategory error');
        }));
    });
    await Promise.allSettled(pendingPromise);
    console.log('addHeroHotCategory end');
    await (0, closeExcessPage_1.closeExcessPage)(browser);
}
exports.addHeroHotCategory = addHeroHotCategory;
//# sourceMappingURL=addHeroHotCategory.js.map