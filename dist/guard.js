export function guard(...args) {
    return args.flat(Infinity).filter(e => e && typeof e === 'number');
}
