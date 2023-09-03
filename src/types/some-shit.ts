interface allProps {
    x1: string,
    x2: string,
    x3: string,
}

type requiredType = {
    [Property in keyof allProps]: boolean;
}

export const xxxyyy: requiredType = {
    x1: true,
    x2: true,
    x3: false,
}