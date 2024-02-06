import { Decimal } from 'decimal.js';
import { guard } from './guard';
function baseSum(array, asObject = false) {
    const a = guard(array);
    const n = a.length ? Decimal.sum(...a) : new Decimal(0);
    return asObject ? n : n.toNumber();
}
export function sum(array, asObject) {
    if (!arguments.length)
        return 0;
    return Array.isArray(array)
        ? baseSum(array, asObject)
        : baseSum([...arguments]);
}
