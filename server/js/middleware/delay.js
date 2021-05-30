"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = (delay) => {
    return async (ctx, next) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
        await next();
    };
};
exports.delay = delay;
//# sourceMappingURL=delay.js.map