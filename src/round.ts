import { Decimal } from 'decimal.js'
import { guard } from './guard'
import { sum } from './sum'
import { product } from './product'
import { mean } from './mean'

export function round(value: any, scale?: number): number
export function round(value: any, scale?: number, asObject?: boolean): Decimal
export function round(value: any, scale = 0, asObject?: any)
{
	const [v = 0] = guard([value])
	const n = new Decimal(v).toDecimalPlaces(scale)
	return asObject ? n : n.toNumber()
}

export function r2(value: any): number
export function r2(value: any, asObject?: boolean): Decimal
export function r2(value: any, asObject?: any)
{
	return asObject ? round(value, 2, true) : round(value, 2)
}

export function r2sum(array: any[]): number
export function r2sum(array: any[], asObject?: boolean): Decimal
export function r2sum(array: any[], asObject?: boolean)
{
	const n = sum(array, true)
	return asObject ? r2(n, asObject) : r2(n)
}
export function r2product(array: any[]): number
export function r2product(array: any[], asObject?: boolean): Decimal
export function r2product(array: any[], asObject?: boolean)
{
	const n = product(array, true)
	return asObject ? r2(n, asObject) : r2(n)
}
export function r2mean(array: any[]): number
export function r2mean(array: any[], asObject?: boolean): Decimal
export function r2mean(array: any[], asObject?: boolean)
{
	const n = mean(array, true)
	return asObject ? r2(n, asObject) : r2(n)
}