import { Decimal } from 'decimal.js';
import { guard } from './guard';
import { sum } from './sum';
import { product } from './product';
import { mean } from './mean';
export function round(value, scale = 0, asObject) {
    const [v = 0] = guard([value]);
    const n = new Decimal(v).toDecimalPlaces(scale);
    return asObject ? n : n.toNumber();
}
export function r2(value, asObject) {
    return asObject ? round(value, 2, true) : round(value, 2);
}
export function r2sum(array, asObject) {
    const n = sum(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
export function r2product(array, asObject) {
    const n = product(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
export function r2mean(array, asObject) {
    const n = mean(array, true);
    return asObject ? r2(n, asObject) : r2(n);
}
