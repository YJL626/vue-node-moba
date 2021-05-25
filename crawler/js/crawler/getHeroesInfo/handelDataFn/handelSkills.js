"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelSkills = void 0;
const handelSkills = async ($) => {
    const skills = Array.from({ length: 4 }).map(() => {
        return {
            name: '',
            pic: '',
            info: '',
            plusValue: '',
        };
    });
    $('.plus-tab.controller  img').each((i, elem) => {
        skills[i].pic = elem.attribs.src;
    });
    $('.plus-name').each((i, elem) => {
        skills[i].name = $(elem).text() || '';
    });
    $('.plus-value').each((i, elem) => {
        skills[i].plusValue = $(elem).text() || '';
    });
    $('.plus-int').each((i, elem) => {
        skills[i].info = $(elem).text() || '';
    });
    console.log(skills);
    process.exit();
};
exports.handelSkills = handelSkills;
//# sourceMappingURL=handelSkills.js.map