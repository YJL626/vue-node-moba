"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCategoryData = void 0;
const service_1 = require("../../../db/service");
const categoryHeroId = '60ab8d9393e5bf39f491e5ec';
const tempMap = new Map();
const handleCategoryData = async (categoryData) => {
    const categories = categoryData.split('/');
    const result = await Promise.allSettled(categories.map(async (category) => {
        //有缓存则返回缓存
        if (tempMap.has(category))
            return tempMap.get(category) || '';
        const result = await service_1.dbService.getCategoryIdByName(category);
        if (result) {
            //保存缓存
            tempMap.set(category, result);
            return result;
        }
        const document = await service_1.dbService.createCategory({
            name: category,
            parent: categoryHeroId,
        });
        return document ? document._id : false;
    }));
    return result.map(({ value = '' }) => value);
};
exports.handleCategoryData = handleCategoryData;
//# sourceMappingURL=handleCategoryData.js.map