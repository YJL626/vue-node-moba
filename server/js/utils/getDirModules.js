"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirModules = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const path_1 = require("path");
const getDirFilesPath_1 = require("./getDirFilesPath");
const getDirModules = (path, option) => {
    //筛选一下忽略的数组
    const { deep = false, excludes = [], includes = [/\.[t,j]s$/], completeModule = false, } = option || {};
    let filePathArr = (0, getDirFilesPath_1.getDirFilesPath)(path, { deep });
    const result = [];
    filePathArr.filter((filePath) => includes.some((reg) => reg.test(filePath)));
    if (excludes.length) {
        //匹配到的则移除
        filePathArr = filePathArr.filter((filePath) => excludes.some((reg) => reg.test((0, path_1.basename)(filePath))) === false);
    }
    //根据文件名去读取module，
    filePathArr.forEach((filePath) => {
        try {
            const module = require(filePath);
            if (completeModule) {
                result.push(module);
            }
            else {
                result.push(...Object.values(module));
            }
        }
        catch {
            null;
        }
    });
    return result;
};
exports.getDirModules = getDirModules;
//# sourceMappingURL=getDirModules.js.map