"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = void 0;
const config_1 = require("../../config");
const closeExcessPage_1 = require("../utils/closeExcessPage");
const getArticlesInfo_1 = require("./getArticlesInfo");
const getArticleList_1 = require("./getArticleList");
const getNews = async (browser) => {
    //这个没有直接存入db getInfo时一并存入
    const newsList = await getArticleList_1.getNewsList(browser);
    console.log(`${newsList.length} 条news`);
    console.log('获取详情......');
    let len = newsList.length;
    let runningList = [];
    while (len) {
        console.log(len);
        if (config_1.isTest) {
            console.log('--');
            await getArticlesInfo_1.getArticleInfo(browser, newsList[0]);
            break;
        }
        // 并行执行多个
        runningList.push(getArticlesInfo_1.getArticleInfo(browser, newsList[--len]));
        if (runningList.length >= config_1.pageCount) {
            await Promise.allSettled(runningList);
            await closeExcessPage_1.closeExcessPage(browser, 1);
            runningList = [];
        }
    }
};
exports.getNews = getNews;
//# sourceMappingURL=index.js.map