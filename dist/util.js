"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = exports.defaultToZero = void 0;
const sum_1 = require("./sum");
const product_1 = require("./product");
const mean_1 = require("./mean");
const round_1 = require("./round");
const lodash_1 = require("lodash");
function defaultToZero(value) {
    return (0, lodash_1.defaultTo)((0, lodash_1.toNumber)(value), 0);
}
exports.defaultToZero = defaultToZero;
const mixin = object => (0, lodash_1.mixin)(object, {
    sum: sum_1.sum, product: product_1.product, mean: mean_1.mean, round: round_1.round, r2: round_1.r2,
    r2sum: round_1.r2sum, r2product: round_1.r2product, r2mean: round_1.r2mean,
}, { chain: false });
exports.mixin = mixin;
