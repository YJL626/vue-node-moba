"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const category_schema_1 = require("./db/model/category.schema");
class Service {
    async getCategoryIdByName({ name, }) {
        const result = await category_schema_1.CategoryModel.findOne({ name });
        if (result) {
            return result._id;
        }
        return false;
    }
}
exports.Service = Service;
