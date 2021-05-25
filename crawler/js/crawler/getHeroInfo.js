"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroInfo = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
const service_1 = require("../db/service");
const categoryHeroId = '60ab8d9393e5bf39f491e5ec';
const getHeroInfo = async () => {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto('https://pvp.qq.com/web201605/herodetail/m/113.html', {
        waitUntil: 'networkidle0',
    });
    const htmlData = await page.content();
    const $body = cheerio_1.default(htmlData);
    const $find = $body.find.bind($body);
    service_1.dbService.createCategory({ name: '英雄', parent: categoryHeroId });
    const heroModelData = {
        name: $find('.hero-name').text(),
        title: $find('.hero-title').text(),
        category: $find('.hero-location').text(),
    };
    console.log(heroModelData);
    await browser.close();
    return 10;
};
exports.getHeroInfo = getHeroInfo;
