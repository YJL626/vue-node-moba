"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getHeroesInfo_1 = require("./crawler/getHeroesInfo");
const puppeteer_1 = __importDefault(require("puppeteer"));
const closeExcessPage_1 = require("./crawler/utils/closeExcessPage");
const getNews_1 = require("./crawler/getNews");
(async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
    });
    await getHeroesInfo_1.getHeroesInfo(browser);
    await closeExcessPage_1.closeExcessPage(browser, 1);
    await getNews_1.getNews(browser);
    console.log('end');
    process.exit();
})();
//# sourceMappingURL=app.js.map