import { Decimal } from 'decimal.js';
import { guard } from './guard';
function baseProduct(array, asObject = false) {
    const a = guard(array);
    const n = a.length
        ? a.reduce((a, v) => Decimal.mul(a, v), new Decimal(1))
        : new Decimal(0);
    return asObject ? n : n.toNumber();
}
export function product(array, asObject) {
    if (!arguments.length)
        return 0;
    return Array.isArray(array)
        ? baseProduct(array, asObject)
        : baseProduct([...arguments]);
}
