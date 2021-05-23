"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroSchema = void 0;
const mongoose_1 = require("mongoose");
const heroSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    category: [{ type: String, ref: 'category' }],
    soccer: {
        difficult: Number,
        skill: Number,
        attack: Number,
        survive: Number,
    },
    backgroundPic: { type: String },
    introduceVideo: { type: String },
    contentPic: { type: String },
    skills: [
        {
            name: String,
            pic: String,
            delay: String,
            consume: Number,
            info: String,
        },
    ],
}, { timestamps: true });
exports.heroSchema = heroSchema;
