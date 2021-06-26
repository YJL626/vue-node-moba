"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryCtr = void 0;
const errType_1 = require("../constants/errType");
const category_server_1 = require("../server/category.server");
const category_model_1 = require("../server/db/model/category.model");
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
        let result;
        const queryType = ctx.query.type || '';
        const parent = ctx.query.parent || '';
        try {
            if (!result && queryType === 'top') {
                result = await category_model_1.CategoryModel.find({ parent: { $exists: false } });
            }
            if (!result && parent) {
                console.log(parent);
                result = await category_model_1.CategoryModel.aggregate([
                    {
                        $lookup: {
                            from: 'categories',
                            localField: 'parent',
                            foreignField: '_id',
                            as: 'parent',
                        },
                    },
                    {
                        $match: {
                            'parent.0.name': parent,
                        },
                    },
                    {
                        $set: { parent: { $first: '$parent' } },
                    },
                ]);
            }
            if (!result) {
                result = await category_model_1.CategoryModel.find().populate('parent');
            }
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