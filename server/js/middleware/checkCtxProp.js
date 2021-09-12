"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCtxProperty = void 0;
const errType_1 = require("../constants/errType");
const checkObjectForm_1 = require("../utils/checkObjectForm");
/**
 * @description: 对ctx特定属性进行验证如果不存在则报400 DATA_FORM_ERROR 错误
 * @param {*} model ctx应具有的属性
 * @return {*}验证通过则next,不通过emit error
 */
const checkCtxProperty = (model) => {
    return async (ctx, next) => {
        if ((0, checkObjectForm_1.checkObjectForm)(model, ctx)) {
            await next();
        }
        else {
            ctx.app.emit('error', errType_1.DATA_FORM_ERROR, ctx);
        }
    };
};
exports.checkCtxProperty = checkCtxProperty;
//# sourceMappingURL=checkCtxProp.js.map