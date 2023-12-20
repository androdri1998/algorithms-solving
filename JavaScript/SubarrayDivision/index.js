function solution(s, d, m) {
  let pieces = 0;

  for (let index = 0; index < s.length; index++) {
    const limit = index + (m - 1);
    let sum = 0;

    for (let j = index; j <= limit; j++) {
      if (s[j]) {
        sum += s[j];
      }
    }

    if (sum === d) {
      pieces++;
    }
  }

  return pieces;
}

const main = () => {
  console.log(solution([2, 3, 2, 4, 3], 5, 2));
  // output: 5
};

main();
