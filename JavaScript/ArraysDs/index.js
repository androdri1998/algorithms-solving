function solution(a) {
    const { length } = a;
    const results = [];
    for (let index = length - 1; index >= 0; index--) {
        results.push(a[index]);
    }

    return results;
}