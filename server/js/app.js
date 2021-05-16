"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const app = new koa_1.default();
app.use(cors_1.default());
app.listen(8000, () => {
    console.log('start');
});
//# sourceMappingURL=app.js.map