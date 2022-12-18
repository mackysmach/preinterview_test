export const merge =function (x: number[], y: number[]): number[]  {
    const result = Array(x.length + y.length);
    let i = 0, j = 0, k = 0;
    while (i < x.length && j < y.length) {
        result[k++] = x[i] < y[j] ? x[i++] : y[j++];
    }
    while (i < x.length) {
        result[k++] = x[i++];
    }
    while (j < y.length) {
        result[k++] = y[j++];
    }
    return result;
};


