"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recip = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
function recip(value, asObject = false) {
    [value = 0] = (0, guard_1.guard)([value]);
    const n = decimal_js_1.Decimal.pow(value, -1);
    return asObject ? n : n.toNumber();
}
exports.recip = recip;
