"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobaDbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mobaDbConnect = mongoose_1.default.createConnection('mongodb://mobaAdmin:123456@localhost/moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
exports.mobaDbConnect = mobaDbConnect;
mobaDbConnect.on('open', () => {
    console.log('db open');
});
