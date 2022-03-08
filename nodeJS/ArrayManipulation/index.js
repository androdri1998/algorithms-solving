const solution = (n, queries) => {
    const arrayResults = new Array(n + 2);
    arrayResults.fill(0);

    queries.forEach(query => {
        const [a, b, k] = query;
        arrayResults[a] += k;
        arrayResults[b + 1] -= k;
    });

    let maxNumber = 0;
    let temp = 0;
    arrayResults.forEach(value => {
        temp += value;
        maxNumber = Math.max(maxNumber, temp);
    });

    return maxNumber;
}