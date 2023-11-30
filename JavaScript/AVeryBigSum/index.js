function solution(arr) {
  let initialValue = 0;
  const result = arr.reduce(
    (sumResult, value) => sumResult + value,
    initialValue
  );

  return result;
}
