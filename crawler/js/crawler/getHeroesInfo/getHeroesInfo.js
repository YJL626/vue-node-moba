"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesInfo = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
const handleCategoryData_1 = require("./utils/handleCategoryData");
const saveToHero_1 = require("./utils/saveToHero");
const handelSkins_1 = require("./utils/handelSkins");
const handelHeroVideo_1 = require("./utils/handelHeroVideo");
const getHeroTargetUrl_1 = require("./utils/getHeroTargetUrl");
const handelInfoPic_1 = require("./utils/handelInfoPic");
const getHeroIndexList_1 = require("./utils/getHeroIndexList");
const iPhone = puppeteer_1.default.devices['iPhone 6'];
const getHeroesInfo = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    const heroIndexList = await getHeroIndexList_1.getHeroIndexList(browser);
    await getHeroInfo(113, browser);
    return 10;
};
exports.getHeroesInfo = getHeroesInfo;
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
    /* if (!heroId) {
      return
      continue
    } */
    const heroDetailData = {
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
//# sourceMappingURL=getHeroesInfo.js.map