"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHeroesInfo_1 = require("./crawler/getHeroesInfo");
(async () => {
    await getHeroesInfo_1.getHeroesInfo();
    process.exit();
})();
//# sourceMappingURL=app.js.map