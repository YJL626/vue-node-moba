"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryId = void 0;
const category_model_1 = require("../../db/model/category.model");
const getCategoryId = async (model, option = {}) => {
    let document = await category_model_1.CategoryModel.findOne({ name: model.name });
    if (document)
        return document._id;
    if (!option.create)
        return '';
    model = model.parent ? model : { name: model.name };
    document = await new category_model_1.CategoryModel(model)
        .save()
        .catch(() => category_model_1.CategoryModel.findOne({ name: model.name }));
    if (document)
        return document._id;
    console.log('getCategoryId error categoryName:' + model.name);
    return '';
};
exports.getCategoryId = getCategoryId;
//# sourceMappingURL=getCategoryId.js.map