import { Decimal } from 'decimal.js'
import { guard } from './guard'

function baseSum(array: any[], asObject: boolean = false)
{
	const a = guard(array)
	const n = a.length ? Decimal.sum(...a) : new Decimal(0)
	return asObject ? n : n.toNumber()
}

export function sum(array: any[]): number
export function sum(array: any[], asObject?: boolean): Decimal
export function sum(array: any[], asObject?: any)
{
	if (!arguments.length) return 0

	return Array.isArray(array)
		? baseSum(array, asObject)
		: baseSum([...arguments])
}