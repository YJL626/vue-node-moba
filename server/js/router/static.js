"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const path_1 = require("path");
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const router = new koa_router_1.default({ prefix: '/static' });
exports.router = router;
router.get('/', async (ctx, next) => {
    console.log(10);
    await next();
}, koa_static_1.default(path_1.resolve('./static')));
//# sourceMappingURL=static.js.map