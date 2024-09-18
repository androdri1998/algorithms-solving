function catAndMouse(x, y, z) {
  let xValue = parseInt(x),
    yValue = parseInt(y),
    result = "";

  while (true) {
    if (yValue === xValue) {
      result = "Mouse C";
      break;
    }
    if (xValue === parseInt(z)) {
      result = "Cat A";
      break;
    }
    if (yValue === parseInt(z)) {
      result = "Cat B";
      break;
    }

    xValue = x < z ? xValue + 1 : xValue - 1;
    yValue = y < z ? yValue + 1 : yValue - 1;
  }

  return result;
}

console.log(catAndMouse(2, 1, 3));
// Cat A
console.log(catAndMouse(2, 4, 3));
// Mouse C
console.log(catAndMouse(1, 4, 3));
// Cat B
