"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServer = void 0;
const category_model_1 = require("./db/model/category.model");
class CategoryServer {
    async create(data) {
        const category = new category_model_1.categoryModel(data);
        const result = await category
            .save()
            .then(() => true)
            .catch(() => false);
        return result;
    }
    async get() {
        const result = await category_model_1.categoryModel.find();
        return result;
    }
}
const categoryServer = new CategoryServer();
exports.categoryServer = categoryServer;
//# sourceMappingURL=category.server.js.map