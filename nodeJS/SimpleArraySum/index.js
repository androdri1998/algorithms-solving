const checkConstraintsToLengthOfArray = (arrayLength) => {
  if (arrayLength > 0) {
    return true;
  }

  return false;
}

const checkConstraintsToArrayString = (arrayString) => {
  const arrayToCheck = arrayString.trim().split(' ');
  if (arrayToCheck.length <= 1000) {
    return true;
  }

  return false;
}

const checkLengthOfArray = (arrayLength, arrayString) => {
  const arrayToCheck = arrayString.trim().split(' ');
  const isEqual = arrayLength === arrayToCheck.length;

  return isEqual
}

const sumArray = (arrayString) => {
  const arrayToSum = arrayString.trim().split(' ');

  const sum = arrayToSum.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue);
  }, 0);

  return sum
}

const sumValues = (arrayLength, arrayString) => {
  if(checkConstraintsToLengthOfArray(arrayLength) && 
    checkConstraintsToArrayString(arrayString) && 
    checkLengthOfArray(arrayLength, arrayString)) {
    const sum = sumArray(arrayString);

    return sum;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(sumValues(5, "4 3 2 1 2"));