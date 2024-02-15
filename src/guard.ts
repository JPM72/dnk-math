export function guard(...args: any[]): number[]
{
	return args.flat(Infinity).filter(e => typeof e === 'number')
}