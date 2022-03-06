function solution(n, queries) {
    const lastAnswerArr = [];

    for (let index = 0; index < n; index++) {
        lastAnswerArr[index] = [];
    }

    let lastAnswer = 0;
    const results = [];
    queries.map(query => {
        const [type, xor, value] = query;
        const idx = (xor ^ lastAnswer) % n;

        if (type === 1) {
            lastAnswerArr[idx].push(value);
        } else if (type === 2) {
            const arrayLength = lastAnswerArr[idx].length;
            lastAnswer = lastAnswerArr[idx][value % arrayLength];
            results.push(lastAnswer);
        }
    });

    return results;
}