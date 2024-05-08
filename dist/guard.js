"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = void 0;
const decimal_js_1 = require("decimal.js");
function guard(...args) {
    return args.flat(Infinity).filter(e => e instanceof decimal_js_1.Decimal || typeof e === 'number');
}
exports.guard = guard;
