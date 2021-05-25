"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroDetailModel = exports.HeroModel = void 0;
const __1 = require("..");
const mongoose_1 = require("mongoose");
const heroSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    category: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'category' }],
    heroImg: { type: String },
});
const heroDetailSchema = new mongoose_1.Schema({
    heroId: { type: mongoose_1.SchemaTypes.ObjectId, ref: 'hero' },
    soccer: {
        difficult: Number,
        skill: Number,
        attack: Number,
        survive: Number,
    },
    bgcPic: { type: String },
    skins: [{ name: String, pic: String }],
    heroVideo: { type: String },
    infoPic: String,
    skills: [
        {
            name: String,
            pic: String,
            info: String,
            plusValue: String,
        },
    ],
}, { timestamps: true });
const HeroDetailModel = __1.mobaDbConnect.model('heroDetail', heroDetailSchema, 'heroDetails');
exports.HeroDetailModel = HeroDetailModel;
const HeroModel = __1.mobaDbConnect.model('hero', heroSchema, 'heroes');
exports.HeroModel = HeroModel;
//# sourceMappingURL=hero.schema.js.map