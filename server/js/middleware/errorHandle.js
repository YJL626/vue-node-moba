"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errHandle = void 0;
const errHandle = async (err, ctx) => {
    try {
        if (err.msg && err.stateCode) {
            ctx.status = err.stateCode;
            ctx.body = err.msg;
        }
        else {
            ctx.status = 404;
            ctx.body = 'err not found';
        }
    }
    catch {
        console.log('请传递,constantError,ParameterizedContext');
    }
};
exports.errHandle = errHandle;
//# sourceMappingURL=errorHandle.js.map