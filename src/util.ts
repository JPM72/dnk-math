import { sum } from './sum'
import { product } from './product'
import { mean } from './mean'
import
{
	round,
	r2, r2sum, r2product, r2mean
} from './round'

import { defaultTo, toNumber, mixin as lodashMixin } from 'lodash'

export function defaultToZero(value: any)
{
	return defaultTo(toNumber(value), 0)
}

export const mixin = object => lodashMixin(object, {
	sum, product, mean, round, r2,
	r2sum, r2product, r2mean,
}, { chain: false })