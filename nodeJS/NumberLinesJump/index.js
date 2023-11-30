function solution(x1, v1, x2, v2) {
  if (x2 > x1 && v2 >= v1) {
    return "NO";
  }

  const diff = x2 - x1;
  const diffSpeed = v1 - v2;
  const steps = diff / diffSpeed;

  let isEqual = false;
  let currentX1 = x1;
  let currentX2 = x2;
  for (let index = 0; index < steps; index++) {
    currentX1 += v1;
    currentX2 += v2;

    if (currentX1 === currentX2) {
      isEqual = true;
      break;
    }
  }

  return isEqual ? "YES" : "NO";
}

const main = () => {
  console.log(solution(2, 3, 6, 2));
  // output: YES
  console.log(solution(1, 2, 6, 3));
  // output: NO
};

main();
