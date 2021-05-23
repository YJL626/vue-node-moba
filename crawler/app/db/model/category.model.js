"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const __1 = require("..");
const category_schema_1 = require("../schema/category.schema");
const CategoryModel = __1.mobaDbConnect.model('category', category_schema_1.categorySchema);
exports.CategoryModel = CategoryModel;