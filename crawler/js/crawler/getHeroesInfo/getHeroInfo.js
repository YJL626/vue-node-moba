"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroInfo = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const handleCategoryData_1 = require("./handelDataFn/handleCategoryData");
const saveToHero_1 = require("./handelDataFn/saveToHero");
const handelSkins_1 = require("./handelDataFn/handelSkins");
const handelHeroVideo_1 = require("./handelDataFn/handelHeroVideo");
const getHeroTargetUrl_1 = require("./handelDataFn/getHeroTargetUrl");
const handelInfoPic_1 = require("./handelDataFn/handelInfoPic");
const handelSkills_1 = require("./handelDataFn/handelSkills");
async function getHeroInfo(index, browser) {
    const page = await browser.newPage();
    const heroInfoUrl = getHeroTargetUrl_1.getHeroInfoUrl(index);
    await page.goto(heroInfoUrl, {
        waitUntil: 'networkidle0',
    });
    const htmlData = await page.content();
    page.close();
    const $ = cheerio_1.default.load(htmlData);
    const heroId = await saveToHero_1.saveToHero({
        name: $('.hero-name').text(),
        title: $('.hero-title').text(),
        category: await handleCategoryData_1.handleCategoryData($('.hero-location').text()),
        index: index,
    });
    console.log();
    if (!heroId) {
        console.log('id获取失败');
        return;
    }
    const heroDetailData = {
        skills: await handelSkills_1.handelSkills($),
        heroId,
        soccer: {
            difficult: Number($('.cnver1').attr('class')?.slice(-1)),
            skill: Number($('.cnver2').attr('class')?.slice(-1)),
            attack: Number($('.cnver3').attr('class')?.slice(-1)),
            survive: Number($('.cnver4').attr('class')?.slice(-1)),
        },
        bgcPic: $('.header-hero>img').attr('src'),
        skins: await handelSkins_1.handelSkins($('.hero-skin').attr('href'), browser),
        heroVideo: await handelHeroVideo_1.handelHeroVideo(heroInfoUrl, browser),
        infoPic: await handelInfoPic_1.handelInfoPic(index, browser),
    };
    console.log(heroDetailData);
    await browser.close();
}
exports.getHeroInfo = getHeroInfo;
//# sourceMappingURL=getHeroInfo.js.map