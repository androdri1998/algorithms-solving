function solution(n, initial = null) {
  if (n === 0) {
    return;
  }

  initial = initial || n;
  let stair = "";
  for (let index = 0; index < n - 1; index++) {
    stair = stair.concat(" ");
  }

  let index = 0;
  const maxStairs = initial - n;
  do {
    stair = stair.concat("#");
    index++;
  } while (index <= maxStairs);

  console.log(stair);

  staircase(n - 1, initial);
}
