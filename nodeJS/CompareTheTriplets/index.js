
function solution(a, b) {
  let aScore = 0;
  let bScore = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      aScore++;
      continue;
    }
    if (a[index] < b[index]) {
      bScore++;
      continue;
    }
  }

  return [aScore, bScore];
}
