"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerCtr = void 0;
const errType_1 = require("../constants/errType");
const banner_model_1 = require("../server/db/model/banner.model");
const category_model_1 = require("../server/db/model/category.model");
class BannerCtr {
    async get(ctx, next) {
        try {
            let result;
            const categoryDocument = ctx.query.category
                ? await category_model_1.CategoryModel.findOne({ name: ctx.query.category })
                : null;
            if (categoryDocument) {
                result = await banner_model_1.BannerModel.find({ category: categoryDocument._id });
            }
            if (!result) {
                result = await banner_model_1.BannerModel.find();
            }
            ctx.body = result;
            await next();
        }
        catch {
            console.log('BannerCtr error');
            ctx.app.emit('error', errType_1.DB_SERVER_ERROR, ctx);
        }
    }
}
const bannerCtr = new BannerCtr();
exports.bannerCtr = bannerCtr;
//# sourceMappingURL=banner.controller.js.map