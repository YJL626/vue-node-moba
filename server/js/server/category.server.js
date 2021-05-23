"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServer = void 0;
const category_model_1 = require("./db/model/category.model");
class CategoryServer {
    async create({ name, parent }) {
        //parent为空字符串则不传入
        const categoryInfo = parent ? { name, parent } : { name };
        const category = new category_model_1.CategoryModel(categoryInfo);
        const result = await category
            .save()
            .then(() => true)
            .catch(() => false);
        return result;
    }
    async get() {
        const result = await category_model_1.CategoryModel.find().populate('parent');
        return result;
    }
    async getItemById({ id }) {
        const result = await category_model_1.CategoryModel.findById(id)
            .populate('parent')
            .catch(() => false);
        return result;
    }
    async del({ id }) {
        try {
            const { deletedCount } = await category_model_1.CategoryModel.find({ _id: id }).deleteOne();
            return !!deletedCount;
        }
        catch {
            return false;
        }
    }
    async replace({ id, name, parent }) {
        const categoryInfo = parent ? { _id: id, name, parent } : { _id: id, name };
        const categoryDocument = new category_model_1.CategoryModel(categoryInfo);
        const result = await category_model_1.CategoryModel.replaceOne({ _id: id }, categoryDocument)
            .then(() => true)
            .catch(() => false);
        return result;
    }
}
const categoryServer = new CategoryServer();
exports.categoryServer = categoryServer;
//# sourceMappingURL=category.server.js.map