"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObjectForm = void 0;
function checkObjectForm(model, data) {
    return Object.keys(model).every((property) => {
        //查询是否有嵌套
        if (typeof model[property] === 'object') {
            // 如果body和模型的数据类型不一致说明验证未通过
            if (typeof data[property] !== 'object')
                return false;
            //递归的进行验证
            return checkObjectForm(model[property], data[property]);
        }
        return Object.prototype.hasOwnProperty.call(data, property);
    });
}
exports.checkObjectForm = checkObjectForm;
//# sourceMappingURL=checkObjectForm.js.map