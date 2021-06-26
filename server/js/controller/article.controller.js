"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleCtr = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const errType_1 = require("../constants/errType");
const articleErrorMsg_1 = require("../router/errorMsg/articleErrorMsg");
const article_model_1 = require("../server/db/model/article.model");
const category_model_1 = require("../server/db/model/category.model");
class ArticleCtr {
    async getArticle(ctx, next) {
        const category = ctx.query.category || '', size = Number(ctx.query.size) || 10, page = Number(ctx.query.page) || 1;
        const skip = size * (page - 1), categoryId = await category_model_1.CategoryModel.findOne({ name: category })
            .then((document) => document?._id)
            .catch(() => '');
        if (!category || !categoryId) {
            ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
            return;
        }
        const articleLen = (await article_model_1.ArticleModel.find({ categories: categoryId }))
            .length;
        const result = await article_model_1.ArticleModel.find({ categories: categoryId })
            .sort({ time: -1, _id: -1 })
            .skip(skip)
            .limit(size)
            .populate('categories')
            .catch(() => {
            console.log('ArticleCtr.getArticle :ArticleModel error ');
            ctx.throw(400);
        });
        ctx.body = {
            data: result,
            pagination: {
                currentPage: page,
                size,
                pageCount: Math.ceil(articleLen / size),
                total: articleLen,
            },
        };
        await next();
    }
    async getArticleInfo(ctx, next) {
        try {
            const articleId = ctx.params.id;
            const result = await article_model_1.ArticleModel.aggregate([
                { $match: { _id: mongoose_1.default.Types.ObjectId(articleId) } },
                {
                    $lookup: {
                        from: 'articleContents',
                        localField: '_id',
                        foreignField: 'articleId',
                        as: 'articleInfo',
                    },
                },
                {
                    $set: {
                        articleInfo: { $first: '$articleInfo.content' },
                    },
                },
            ]).then((result) => result[0]);
            if (result) {
                ctx.body = result;
                await next();
            }
            else {
                ctx.app.emit('error', articleErrorMsg_1.ARTICLE_ID_IS_NOT_EXISTS, ctx);
            }
        }
        catch (err) {
            ctx.app.emit('error', articleErrorMsg_1.PARAMS_IS_NOT_ID, ctx);
            console.log(err);
        }
    }
}
const articleCtr = new ArticleCtr();
exports.articleCtr = articleCtr;
//# sourceMappingURL=article.controller.js.map