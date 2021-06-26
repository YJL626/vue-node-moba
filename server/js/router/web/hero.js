"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRouter = void 0;
const router_1 = __importDefault(require("@koa/router"));
const koa_body_1 = __importDefault(require("koa-body"));
const hero_controller_1 = require("../../controller/hero.controller");
const heroRouter = new router_1.default({ prefix: '/api/heroes' });
exports.heroRouter = heroRouter;
heroRouter.get('/', koa_body_1.default(), hero_controller_1.heroCtr.getHeroes);
heroRouter.get('/:id', hero_controller_1.heroCtr.getInfoById);
//# sourceMappingURL=hero.js.map