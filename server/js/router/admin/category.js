"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const category_controller_1 = require("../../controller/category.controller");
const checkCtxProp_1 = require("../../middleware/checkCtxProp");
const categoryRouter = new koa_router_1.default({ prefix: '/admin/api/category' });
exports.categoryRouter = categoryRouter;
categoryRouter.post('/', checkCtxProp_1.checkCtxProperty({ request: { body: { name: '' } } }), category_controller_1.categoryCtr.create);
categoryRouter.get('/', category_controller_1.categoryCtr.get);
//# sourceMappingURL=category.js.map