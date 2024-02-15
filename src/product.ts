import { Decimal } from 'decimal.js'
import { guard } from './guard'


function baseProduct(array: any[], asObject: boolean = false)
{
	const a = guard(array)
	const n = a.reduce((a, v) => Decimal.mul(a, v), new Decimal(+!!a.length))
	return asObject ? n : n.toNumber()
}

export function product(array: any[]): number
export function product(array: any[], asObject?: boolean): Decimal
export function product(array: any[], asObject?: any)
{
	if (!arguments.length) return 0

	return Array.isArray(array)
		? baseProduct(array, asObject)
		: baseProduct([...arguments])
}