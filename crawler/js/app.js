"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
try {
    ;
    (async () => {
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        await page.goto('https://pvp.qq.com/web201605/herodetail/m/113.html', {
            waitUntil: 'networkidle0',
        });
        const htmlData = await page.content();
        const $r = cheerio_1.default(htmlData);
        const heroModelData = {
            name: $r.find('.hero-name').text(),
            title: $r.find('.hero-title').text(),
        };
        console.log(heroModelData);
        await browser.close();
    })();
}
catch {
    console.log('err');
}
