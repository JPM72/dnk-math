"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r2mean = exports.r2product = exports.r2sum = exports.r2 = exports.round = void 0;
const decimal_js_1 = require("decimal.js");
const guard_1 = require("./guard");
const sum_1 = require("./sum");
const product_1 = require("./product");
const mean_1 = require("./mean");
function round(value, scale = 0, asObject) {
    const [v = 0] = (0, guard_1.guard)([value]);
    const n = new decimal_js_1.Decimal(v).toDecimalPlaces(scale);
    return asObject ? n : n.toNumber();
}
exports.round = round;
function r2(value, asObject) {
    return asObject ? round(value, 2, true) : round(value, 2);
}
exports.r2 = r2;
function r2sum(array, asObject) {
    const n = (0, sum_1.sum)(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
exports.r2sum = r2sum;
function r2product(array, asObject) {
    const n = (0, product_1.product)(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
exports.r2product = r2product;
function r2mean(array, asObject) {
    const n = (0, mean_1.mean)(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
exports.r2mean = r2mean;
