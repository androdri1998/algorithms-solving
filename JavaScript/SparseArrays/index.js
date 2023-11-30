function solution(strings, queries) {
    const results = queries.map(query => {
        const arrValues = strings.filter(str => str === query);
        const amount = arrValues.length;

        return amount;
    });

    return results;
}