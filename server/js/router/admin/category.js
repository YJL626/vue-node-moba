"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const category_controller_1 = require("../../controller/category.controller");
const checkCtxProp_1 = require("../../middleware/checkCtxProp");
const koa_body_1 = __importDefault(require("koa-body"));
const categoryRouter = new koa_router_1.default({ prefix: '/admin/api/categories' });
exports.categoryRouter = categoryRouter;
categoryRouter.post('/', koa_body_1.default(), checkCtxProp_1.checkCtxProperty({ request: { body: { name: '', parent: '' } } }), category_controller_1.categoryCtr.create);
categoryRouter.get('/', category_controller_1.categoryCtr.get);
categoryRouter.get('/:id', category_controller_1.categoryCtr.getItem);
categoryRouter.del('/:id', koa_body_1.default({ parsedMethods: ['delete'] }), category_controller_1.categoryCtr.del);
categoryRouter.put('/:id', koa_body_1.default({ parsedMethods: ['put'] }), checkCtxProp_1.checkCtxProperty({ request: { body: { parent: '', name: '' } } }), category_controller_1.categoryCtr.put);
//# sourceMappingURL=category.js.map