"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesInfo = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const getHeroInfo_1 = require("./getHeroInfo");
const getHeroIndexList_1 = require("./handelDataFn/getHeroIndexList");
const iPhone = puppeteer_1.default.devices['iPhone 6'];
const getHeroesInfo = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    const heroIndexList = await getHeroIndexList_1.getHeroIndexList(browser);
    console.log('99999999999');
    await getHeroInfo_1.getHeroInfo(113, browser);
    return 10;
};
exports.getHeroesInfo = getHeroesInfo;
//# sourceMappingURL=index.js.map