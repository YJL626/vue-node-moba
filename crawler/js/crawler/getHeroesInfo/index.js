"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesInfo = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const config_1 = require("../../config");
const closeExcessPage_1 = require("../utils/closeExcessPage");
const getHeroInfo_1 = require("./getHeroInfo");
const getHeroIndexList_1 = require("./handleDataFn/getHeroIndexList");
const getHeroesInfo = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
    });
    const heroIndexList = await getHeroIndexList_1.getHeroIndexList(browser);
    let runningList = [];
    /* await getHeroInfo(115, browser) */
    for (let i = 0; i < heroIndexList.length; i++) {
        console.log(`index${i}`);
        if (config_1.isTest) {
            await runningList.push(getHeroInfo_1.getHeroInfo(heroIndexList[i], browser));
            process.exit();
        }
        runningList.push(getHeroInfo_1.getHeroInfo(heroIndexList[i], browser));
        // 向队列推入任务,圈闭执行完成后再继续执行
        if (runningList.length >= config_1.pageCount) {
            await Promise.allSettled(runningList);
            await closeExcessPage_1.closeExcessPage(browser);
            runningList = [];
        }
    }
    await Promise.allSettled(runningList);
    return 0;
};
exports.getHeroesInfo = getHeroesInfo;
//# sourceMappingURL=index.js.map