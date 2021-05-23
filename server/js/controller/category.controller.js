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
    async getItem(ctx, next) {
        const id = ctx.params.id;
        const result = await category_server_1.categoryServer.getItemById({ id });
        if (result) {
            ctx.body = result;
            await next();
        }
        else {
            ctx.app.emit('error', errType_1.CATEGORY_ID_IS_NOT_EXISTS, ctx);
        }
    }
    async del(ctx, next) {
        const id = ctx.params.id;
        const result = await category_server_1.categoryServer.del({ id });
        if (result) {
            ctx.body = '删除成功';
            await next();
        }
        else {
            ctx.app.emit('error', errType_1.DEL_ERROR, ctx);
        }
    }
    async put(ctx, next) {
        const id = ctx.params.id;
        const { parent, name } = ctx.request.body;
        console.log(id);
        const result = await category_server_1.categoryServer.replace({ id, parent, name });
        if (result) {
            ctx.body = '修改成功';
            await next();
        }
        else {
            ctx.app.emit('error', errType_1.PUT_ERROR, ctx);
        }
    }
}
const categoryCtr = new CategoryCtr();
exports.categoryCtr = categoryCtr;
//# sourceMappingURL=category.controller.js.map