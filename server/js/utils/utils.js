"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRouter = void 0;
//查看有没有router实例的方法
const isRouter = (router) => {
    return !!(router.routes && router.get);
};
exports.isRouter = isRouter;
//# sourceMappingURL=utils.js.map