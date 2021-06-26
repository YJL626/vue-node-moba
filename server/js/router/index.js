"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeRouter = void 0;
const koa_compose_1 = __importDefault(require("koa-compose"));
const getDirModules_1 = require("../utils/getDirModules");
const utils_1 = require("../utils/utils");
const routers = getDirModules_1.getDirModules(__dirname, {
    deep: true,
    excludes: [/^index\./],
}).filter((module) => utils_1.isRouter(module));
const composeRouter = koa_compose_1.default(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
routers.reduce((acc, item) => {
    acc.push(item.routes(), item.allowedMethods());
    return acc;
}, []));
exports.composeRouter = composeRouter;
//# sourceMappingURL=index.js.map