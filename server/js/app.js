"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_body_1 = __importDefault(require("koa-body"));
const index_1 = require("./router/index");
const errorHandle_1 = require("./middleware/errorHandle");
const app = new koa_1.default();
app
    .on('error', errorHandle_1.errHandle)
    .use(koa_body_1.default())
    .use(index_1.composeRouter)
    .use(cors_1.default())
    .listen(8000, () => {
    console.log('start');
});
//# sourceMappingURL=app.js.map