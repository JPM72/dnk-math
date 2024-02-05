import { Decimal } from 'decimal.js'
import { guard } from './guard'
import { sum } from './sum'

export function mean(array: any[]): number
export function mean(array: any[], asObject?: boolean): Decimal
export function mean(array: any[], asObject?: any)
{
	const args = [...arguments]
	if (!args.length) return 0
	const s = sum.apply(null, args)
	if (!s) return 0

	const a = guard(Array.isArray(array) ? array : args)
	const { length } = a

	const n = length ? Decimal.div(s, length) : new Decimal(0)
	return asObject ? n : n.toNumber()
}