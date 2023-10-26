function solution(arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));

  let min = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    min += arr[index];
  }

  let max = 0;
  for (let index = 1; index <= arr.length - 1; index++) {
    max += arr[index];
  }

  console.log(`${min} ${max}`);
}
