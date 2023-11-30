function solution(s, t, a, b, apples, oranges) {
  const check = (position) => {
    if (position >= s && position <= t) {
      return true;
    }

    return false;
  };

  let applesCount = 0;
  apples.forEach((position) => {
    if (check(a + position)) {
      applesCount++;
    }
  });

  let orangeCount = 0;
  oranges.forEach((position) => {
    if (check(b + position)) {
      orangeCount++;
    }
  });

  console.log(applesCount);
  console.log(orangeCount);
}
