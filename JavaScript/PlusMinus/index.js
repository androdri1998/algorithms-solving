function solution(arr) {
  const getDecimal = (number, max) => {
    const result = number / max;
    return result.toFixed(6);
  };

  const max = arr.length;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;

  for (let index = 0; index <= max - 1; index++) {
    const item = arr[index];
    if (item > 0) {
      positiveNumbers++;
    } else if (item < 0) {
      negativeNumbers++;
    } else {
      zeroNumbers++;
    }
  }

  console.log(getDecimal(positiveNumbers, max));
  console.log(getDecimal(negativeNumbers, max));
  console.log(getDecimal(zeroNumbers, max));
}
