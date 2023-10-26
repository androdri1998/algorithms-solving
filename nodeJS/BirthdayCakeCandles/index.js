function solution(candles) {
  let visited = new Map();

  let max = 0;
  candles.forEach((item) => {
    max = item > max ? item : max;
    if (visited.has(item)) {
      let value = visited.get(item);
      visited.set(item, value + 1);
    } else {
      visited.set(item, 1);
    }
  });

  return visited.get(max);
}
