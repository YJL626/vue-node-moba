"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesInfo = void 0;
const config_1 = require("../../config");
const closeExcessPage_1 = require("../utils/closeExcessPage");
const addHeroHotCategory_1 = require("./addHeroHotCategory");
const getHeroInfo_1 = require("./getHeroInfo");
const getHeroIndexList_1 = require("./handleDataFn/getHeroIndexList");
const getHeroesInfo = async (browser) => {
    const heroIndexList = await (0, getHeroIndexList_1.getHeroIndexList)(browser);
    let runningList = [];
    for (let i = 0; i < heroIndexList.length; i++) {
        if (config_1.isTest) {
            console.log('测试运行');
            await runningList.push((0, getHeroInfo_1.getHeroInfo)(heroIndexList[i], browser));
            break;
        }
        console.log(`${i}`);
        runningList.push((0, getHeroInfo_1.getHeroInfo)(heroIndexList[i], browser));
        // 向队列推入任务,达到预设数量后执行完成后再继续执行
        if (runningList.length >= config_1.pageCount) {
            await Promise.allSettled(runningList);
            await (0, closeExcessPage_1.closeExcessPage)(browser);
            runningList = [];
        }
    }
    await Promise.allSettled(runningList);
    await (0, closeExcessPage_1.closeExcessPage)(browser);
    await (0, addHeroHotCategory_1.addHeroHotCategory)(browser);
    console.log('getHeroesInfo end');
};
exports.getHeroesInfo = getHeroesInfo;
//# sourceMappingURL=index.js.map