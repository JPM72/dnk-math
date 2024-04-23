import { Decimal } from 'decimal.js';
export function guard(...args) {
    return args.flat(Infinity).filter(e => e instanceof Decimal || typeof e === 'number');
}
