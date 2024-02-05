import { Decimal } from 'decimal.js'
import { guard } from './guard'

export function recip(value: any): number
export function recip(value: any, asObject: boolean): Decimal
export function recip(value, asObject = false)
{
	[value = 0] = guard([value])
	const n = Decimal.pow(value, -1)
	return asObject ? n : n.toNumber()
}