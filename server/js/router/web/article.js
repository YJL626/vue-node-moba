"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_body_1 = __importDefault(require("koa-body"));
const article_controller_1 = require("../../controller/article.controller");
const checkCtxProp_1 = require("../../middleware/checkCtxProp");
const router = new koa_router_1.default({ prefix: '/api/article' });
router.get('/', (0, koa_body_1.default)(), article_controller_1.articleCtr.getArticle);
router.get('/:id', (0, koa_body_1.default)(), (0, checkCtxProp_1.checkCtxProperty)({ params: { id: '' } }), article_controller_1.articleCtr.getArticleInfo);
exports.default = router;
//# sourceMappingURL=article.js.map