function squares(a, b) {
  const squares = [];

  const aParsed = parseInt(a);
  const bParsed = parseInt(b);
  const aSQRT = Math.trunc(Math.sqrt(aParsed));

  let result = 0;
  for (let index = aSQRT; result <= bParsed; index++) {
    result = index * index;

    const isBetweenAandB = result >= aParsed && result <= bParsed;
    if (isBetweenAandB) {
      squares.push(result);
    }
  }

  return squares.length;
}

console.log(squares(0, 100));
// 11
console.log(squares(100, 1000));
// 22
console.log(squares(1000, 1000000));
// 969
