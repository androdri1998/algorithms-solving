const checkConstraintsToFirstVariable = (variable) => {
  if (variable >= 1) {
    return true;
  }

  return false;
}

const checkConstraintsToSecondVariable = (variable) => {
  if (variable <= 1000) {
    return true;
  }

  return false;
}

const sumValues = (firstNumber, secondNumber) => {
  if(checkConstraintsToFirstVariable(firstNumber) && checkConstraintsToSecondVariable(secondNumber)) {
    const sum = firstNumber + secondNumber;
    return sum;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(sumValues(3, 4));