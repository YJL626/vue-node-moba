"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const index_1 = require("./router/index");
const errorHandle_1 = require("./middleware/errorHandle");
const delay_1 = require("./middleware/delay");
require("./server/db/registerModel"); /* 注册 mongoose model*/
new koa_1.default()
    .on('error', errorHandle_1.errHandle)
    .use(cors_1.default())
    .use(index_1.composeRouter)
    .use(delay_1.delay(500))
    .listen(8000, () => {
    console.log('start');
});
//# sourceMappingURL=app.js.map