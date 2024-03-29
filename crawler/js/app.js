"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getHeroesInfo_1 = require("./crawler/getHeroesInfo");
const puppeteer_1 = __importDefault(require("puppeteer"));
const closeExcessPage_1 = require("./crawler/utils/closeExcessPage");
const getArticle_1 = require("./crawler/getArticle");
const getBanner_1 = require("./crawler/getBanner");
const getHomeVideo_1 = require("./crawler/getHomeVideo/getHomeVideo");
const db_1 = require("./db");
const getHeroBanner_1 = require("./crawler/getHeroBanner");
const run = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
    });
    console.log(process.argv);
    await (0, getBanner_1.getHomeBanners)(browser);
    await (0, getHomeVideo_1.getHomeVideo)(browser);
    await (0, getHeroesInfo_1.getHeroesInfo)(browser);
    await (0, getHeroBanner_1.getHeroBanner)(browser);
    console.log('hero end');
    await (0, closeExcessPage_1.closeExcessPage)(browser, 1);
    await (0, getArticle_1.getArticles)(browser);
    console.log('end');
    await browser.close();
    await db_1.mobaDbConnect.close();
};
run().catch((err) => console.log(err));
//# sourceMappingURL=app.js.map