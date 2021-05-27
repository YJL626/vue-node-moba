"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTest = exports.pageCount = exports.dbSrc = void 0;
//db地址
const dbSrc = 'mongodb://mobaAdmin:123456@localhost/moba';
exports.dbSrc = dbSrc;
const pageCount = 5; //同时开启页面数量
exports.pageCount = pageCount;
const isTest = false; //测试时仅爬取部分数据进行测试.
exports.isTest = isTest;
//# sourceMappingURL=config.js.map