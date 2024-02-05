import { Decimal } from 'decimal.js';
import { guard } from './guard';
function baseSum(array, asObject = false) {
    const n = Decimal.sum(...guard(array));
    return asObject ? n : n.toNumber();
}
export function sum(array, asObject) {
    if (!arguments.length)
        return 0;
    return Array.isArray(array)
        ? baseSum(array, asObject)
        : baseSum([...arguments]);
}
