function solution(arr) {
  let rightColumn = arr.length - 1;
  let leftColumn = 0;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let row = 0; row <= arr.length - 1; row++) {
    leftDiagonal += arr[row][leftColumn];
    rightDiagonal += arr[row][rightColumn];

    leftColumn += 1;
    rightColumn -= 1;
  }

  const diff = leftDiagonal - rightDiagonal;
  return Math.abs(diff);
}
