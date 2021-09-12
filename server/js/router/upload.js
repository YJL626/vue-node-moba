"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const path_1 = require("path");
const koa_body_1 = __importDefault(require("koa-body"));
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default({ prefix: '/admin/api/upload' });
exports.router = router;
router.post('/', (0, koa_body_1.default)({
    multipart: true,
    formidable: {
        uploadDir: (0, path_1.resolve)('./static/picture'),
        keepExtensions: true,
    },
}), async (ctx, next) => {
    console.log(ctx.request.files);
});
//# sourceMappingURL=upload.js.map