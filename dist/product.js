"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
function baseProduct(array, asObject = false) {
    const a = (0, guard_1.guard)(array);
    const n = a.reduce((a, v) => decimal_js_1.Decimal.mul(a, v), new decimal_js_1.Decimal(+!!a.length));
    return asObject ? n : n.toNumber();
}
function product(array, asObject) {
    if (!arguments.length)
        return 0;
    return Array.isArray(array)
        ? baseProduct(array, asObject)
        : baseProduct([...arguments]);
}
exports.product = product;
