import { Decimal } from 'decimal.js'
import { guard } from './guard'

export function percentage(x, y, asFraction = false): number
{
	const g = guard([x, y])
	if (g.length < 2) return 0
	return Decimal.div(...g as [number, number]).times(asFraction ? 1 : 100).toNumber()
}