"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
const sum_1 = require("./sum");
function mean(array, asObject) {
    const args = [...arguments];
    if (!args.length)
        return 0;
    const s = sum_1.sum.apply(null, args);
    if (!s)
        return 0;
    const a = (0, guard_1.guard)(Array.isArray(array) ? array : args);
    const { length } = a;
    const n = length ? decimal_js_1.Decimal.div(s, length) : new decimal_js_1.Decimal(0);
    return asObject ? n : n.toNumber();
}
exports.mean = mean;
