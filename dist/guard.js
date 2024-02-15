export function guard(...args) {
    return args.flat(Infinity).filter(e => typeof e === 'number');
}
