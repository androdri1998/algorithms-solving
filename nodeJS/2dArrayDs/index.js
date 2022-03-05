function solution(arr) {
    const getValues = (row, col, array) => {
        const values = [
            arr[row][col - 1],
            arr[row][col],
            arr[row][col + 1],
            arr[row + 1][col],
            arr[row + 2][col - 1],
            arr[row + 2][col],
            arr[row + 2][col + 1],
        ];

        return values;
    }

    const getSum = (array) => {
        const sum = array.reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);

        return sum;
    }

    const resultsSum = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 1; col < 5; col++) {
            const values = getValues(row, col, arr);
            const sum = getSum(values);
            resultsSum.push(sum);
        }
    }

    const maxSum = Math.max(...resultsSum);
    return maxSum;
}