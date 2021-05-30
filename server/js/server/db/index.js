"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobaDbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../../config/config");
const mobaDbConnect = mongoose_1.default.createConnection(config_1.MOBA_DATE_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
exports.mobaDbConnect = mobaDbConnect;
mobaDbConnect.on('open', () => {
    console.log('db open');
});
//# sourceMappingURL=index.js.map