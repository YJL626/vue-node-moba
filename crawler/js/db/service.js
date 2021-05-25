"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
const category_schema_1 = require("./model/category.schema");
class Service {
    async getCategoryIdByName(name) {
        const result = await category_schema_1.CategoryModel.findOne({ name });
        if (result) {
            return result._id;
        }
        return false;
    }
    async createCategory(option) {
        console.log(option);
        const model = new category_schema_1.CategoryModel(option);
        return await model.save();
    }
}
const dbService = new Service();
exports.dbService = dbService;
//# sourceMappingURL=service.js.map