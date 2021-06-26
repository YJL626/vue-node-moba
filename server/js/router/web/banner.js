"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const koa_body_1 = __importDefault(require("koa-body"));
const banner_controller_1 = require("../../controller/banner.controller");
const bannerRouter = new koa_router_1.default({ prefix: '/api/banner' });
exports.bannerRouter = bannerRouter;
bannerRouter.get('/', koa_body_1.default(), banner_controller_1.bannerCtr.get);
//# sourceMappingURL=banner.js.map