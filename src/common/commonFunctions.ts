export const flatten: any = (obj: any, roots = [], sep = '/') => Object
    .keys(obj)
    .reduce((memo, prop: any) => Object.assign(
        {},
        memo,
        Object.prototype.toString.call(obj[prop]) === '[object Object]'
            ? flatten(obj[prop], roots.concat([prop] as any), sep)
            : { [roots.concat([prop] as any).join(sep)]: obj[prop] }
    ), {})


export const longCalculation = (calculatingMessage: string = 'calculating...', length: number = 1000000000) => {
    let startTime = performance.now();
    console.log('start long calculation')
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (i % (length / 10) === 0) {
            console.log(calculatingMessage);
        }
        count *= 2;
    }
    console.log('end long calculation ' + (performance.now() - startTime))
}