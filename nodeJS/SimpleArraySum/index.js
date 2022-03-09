function solution(ar) {
  const sum = ar.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  return sum;
}