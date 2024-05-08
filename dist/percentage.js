"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentage = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
function percentage(x, y, asFraction = false) {
    const g = (0, guard_1.guard)([x, y]);
    if (g.length < 2)
        return 0;
    return decimal_js_1.Decimal.div.apply(null, g).times(asFraction ? 1 : 100).toNumber();
}
exports.percentage = percentage;
