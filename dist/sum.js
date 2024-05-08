"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
function baseSum(array, asObject = false) {
    const a = (0, guard_1.guard)(array);
    const n = a.length ? decimal_js_1.Decimal.sum(...a) : new decimal_js_1.Decimal(0);
    return asObject ? n : n.toNumber();
}
function sum(array, asObject) {
    if (!arguments.length)
        return 0;
    return Array.isArray(array)
        ? baseSum(array, asObject)
        : baseSum([...arguments]);
}
exports.sum = sum;
