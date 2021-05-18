"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryCtr = void 0;
const errType_1 = require("../constants/errType");
const category_server_1 = require("../server/category.server");
class CategoryCtr {
    async create(ctx, next) {
        const result = await category_server_1.categoryServer.create(ctx.request.body);
        if (result) {
            ctx.status = 200;
            ctx.body = '创建成功';
            await next();
        }
        else {
            ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
        }
    }
    async get(ctx, next) {
        try {
            const result = await category_server_1.categoryServer.get();
            ctx.body = result;
            await next();
        }
        catch {
            ctx.app.emit('error', errType_1.DB_SERVER_ERROR, ctx);
        }
    }
}
const categoryCtr = new CategoryCtr();
exports.categoryCtr = categoryCtr;
//# sourceMappingURL=category.controller.js.map