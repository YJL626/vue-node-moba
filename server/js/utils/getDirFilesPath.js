"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirFilesPath = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
/**
 * @description: 读取目录下的文件
 * @param {string} path 要读取的文件根路径
 * @param { deep?: true } deep:是否深度读取
 * @return string[]
 */
const getDirFilesPath = (path, option) => {
    const { deep = false } = option || {};
    const result = [];
    const dirents = fs_1.readdirSync(path, { withFileTypes: true });
    if (deep) {
        dirents.forEach((dirent) => {
            if (dirent.isDirectory()) {
                //递归的读取目录文件
                const files = getDirFilesPath(path_1.resolve(path, dirent.name), {
                    deep: true,
                });
                result.push(...files);
                return;
            }
            if (dirent.isFile()) {
                result.push(path_1.resolve(path, dirent.name));
            }
        });
    }
    else {
        dirents.forEach((dirent) => dirent.isFile() && result.push(path_1.resolve(path, dirent.name)));
    }
    return result;
};
exports.getDirFilesPath = getDirFilesPath;
//# sourceMappingURL=getDirFilesPath.js.map