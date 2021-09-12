"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOBA_DATE_BASE = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MOBA_DATE_BASE = process.env.MOBA_DATE_BASE || 'mongodb://0.0.0.0/moba';
exports.MOBA_DATE_BASE = MOBA_DATE_BASE;
//# sourceMappingURL=config.js.map