const checkRulesToFirstVariable = (variable) => {
  if (variable >= 1) {
    return true;
  }

  return false;
}

const checkRulesToSecondVariable = (variable) => {
  if (variable <= 1000) {
    return true;
  }

  return false;
}

const sumValues = (firstNumber, secondNumber) => {
  if(checkRulesToFirstVariable(firstNumber) && checkRulesToSecondVariable(secondNumber)) {
    const sum = firstNumber + secondNumber;
    return sum;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(sumValues(3, 4));