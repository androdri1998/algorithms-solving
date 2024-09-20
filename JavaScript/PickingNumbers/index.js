function pickingNumbers(a) {
  let max = 0;

  for (let i = 0; i < a.length; i++) {
    let currentMax = 0;
    const item = a[i];
    for (let j = 0; j < a.length; j++) {
      const itemToCompare = a[j];
      const result = item - itemToCompare;

      const isBiggerThanZero = result >= 0;
      const isLessThanOne = result <= 1;
      if (isBiggerThanZero && isLessThanOne) {
        currentMax = currentMax + 1;
      }
    }

    const isMaxLessThanCurrentMax = max < currentMax;
    max = isMaxLessThanCurrentMax ? currentMax : max;
  }

  return max;
}

console.log(pickingNumbers([1, 2, 6, 8, 9, 2]));
// 3
console.log(pickingNumbers([1, 2, 6, 8, 9]));
// 2
console.log(pickingNumbers([1, 2, 6, 8, 9, 2, 1]));
// 4
