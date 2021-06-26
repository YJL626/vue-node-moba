"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroCtr = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_model_1 = require("../server/db/model/category.model");
const hero_model_1 = require("../server/db/model/hero.model");
const errType_1 = require("../constants/errType");
class HeroCtr {
    async getHeroes(ctx, next) {
        try {
            let result;
            const category = ctx.query.category || '';
            const categoryId = await category_model_1.CategoryModel.findOne({ name: category })
                .then((document) => document?._id)
                .catch(() => {
                console.log('HeroCtr CategoryModel.findOne error');
                return '';
            });
            if (categoryId) {
                result = await hero_model_1.HeroModel.find({ categories: categoryId }).populate('categories');
            }
            else if (category === '热门英雄') {
                result = await hero_model_1.HeroModel.find().populate('categories');
            }
            else {
                result = await hero_model_1.HeroModel.find().populate('categories');
            }
            ctx.body = result;
            await next();
        }
        catch {
            console.log('HeroCtr get error');
            ctx.throw(500);
        }
    }
    async getInfoById(ctx, next) {
        const id = ctx.params.id || '';
        if (!mongoose_1.default.isValidObjectId(id)) {
            return ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
        }
        const result = await hero_model_1.HeroDetailModel.findOne({
            heroId: new mongoose_1.default.Types.ObjectId(id),
        })
            .populate('equipmentRecs.smoothly')
            .populate('equipmentRecs.hard')
            .populate('runes')
            .populate({
            path: 'heroId',
            populate: {
                path: 'categories',
                match: { name: /^[^热]/ },
            },
        })
            .catch((err) => {
            console.log(err);
        });
        /*  populate: { path: 'categories' }, */
        if (result) {
            ctx.body = result;
            await next();
        }
        else {
            ctx.body = 'no content';
        }
    }
    async updateAndCreate(ctx, next) {
        try {
            const id = ctx.params.id || '';
            const { categories, name, title, heroImg } = ctx.request.body || {};
            //仅接受需要的属性
            const model = { categories, name, title, heroImg };
            if (id === 'create') {
                await new hero_model_1.HeroModel(model).save().then(() => {
                    ctx.body = 'success';
                    return next();
                });
                return;
            }
            if (mongoose_1.default.isValidObjectId(id)) {
                await hero_model_1.HeroModel.findByIdAndUpdate(id, model).then(() => {
                    ctx.body = 'success';
                    return next();
                });
                return;
            }
            ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
        }
        catch (error) {
            ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
        }
    }
}
const heroCtr = new HeroCtr();
exports.heroCtr = heroCtr;
//# sourceMappingURL=hero.controller.js.map