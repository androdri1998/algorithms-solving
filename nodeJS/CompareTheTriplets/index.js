const checkConstraintsInput = (arrayString) => {
  const arrayNumbers = arrayString.trim().split(' ');
  let isValid = true;
  arrayNumbers.forEach(number => {
    if(parseInt(number) < 1 || parseInt(number) > 100) {
      isValid = false;
    }
  });

  return isValid;
}

const compareTriplets = (a, b) => {
  const aArrayNumbers = a.trim().split(' ');
  const bArrayNumbers = b.trim().split(' ');

  let aScore = 0;
  let bScore = 0;

  aArrayNumbers.forEach((aNumber, index) => {
    if(parseInt(aNumber) > parseInt(bArrayNumbers[index])) {
      aScore += 1;
    } else if(parseInt(aNumber) < parseInt(bArrayNumbers[index])) {
      bScore += 1;
    }
  });

  return [aScore, bScore];
}

const checkTriplets = (a, b) => {
  if(checkConstraintsInput(a) && checkConstraintsInput(b)) {
    const checkedTriplets = compareTriplets(a, b);
    return checkedTriplets;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(checkTriplets("3 2 11", "3 1 12"));