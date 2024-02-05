export function guard(...args: any[]): number[]
{
	return args.flat(Infinity).filter(e => e && typeof e === 'number')
}