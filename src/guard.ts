import { Decimal } from 'decimal.js'

export function guard(...args: any[]): (number | Decimal)[]
{
	return args.flat(Infinity).filter(e => e instanceof Decimal || typeof e === 'number')
}