const pickRandomArray = (arrayString, length) => {
  const array = arrayString.split(" ");

  const newArray = [];
  const selectedPositions = [];
  for(;newArray.length !== length;) {
    const randomPosition = Math.floor(Math.random() * array.length) + 1;
    const positionSelected = randomPosition - 1;
    const positionSelectedValue = array[positionSelected];
    if(!selectedPositions.includes(positionSelected) && positionSelectedValue !== undefined) {
      newArray.push(parseInt(positionSelectedValue));
      selectedPositions.push(positionSelected);
    }
  }

  return newArray;
};

const getMaxIntegerFromArray = (array) => {
  const arrayReverseSorted = array.sort((a, b) => a - b).reverse();
  const maxInteger = arrayReverseSorted[0];

  return maxInteger;
}

const getMinIntegerFromArray = (array) => {
  const arraySorted = array.sort((a, b) => a - b);
  const minInteger = arraySorted[0];

  return minInteger;
}

const checkConstraintN = (n) => {
  if(n >= 2 && n <= Math.pow(10, 5)) {
    return true;
  }

  return false;
}

const checkConstraintK = (k, n) => {
  if(k >= 2 && k <= n) {
    return true;
  }

  return false;
}

const checkConstraintArr = (arr, n) => {
  const array = arr.split(" ");
  let isValid = true;

  if(array.length !== parseInt(n)){
    isValid = false;
    return isValid;
  }

  array.forEach((item) => {
    const itemInteger = parseInt(item);
    if(itemInteger < 0 && itemInteger > Math.pow(10, 9)) {
      isValid = false;
    }
  });


  return isValid;
}

const getDiff = (n, k, arr) => {
  if(checkConstraintN(n) &&
    checkConstraintK(k, n) &&
    checkConstraintArr(arr, n)
    ) {
    
    const arrPicked = pickRandomArray(arr, k);
    const maxInteger = getMaxIntegerFromArray(arrPicked);
    const minInteger = getMinIntegerFromArray(arrPicked);

    const diff = maxInteger - minInteger;

    return diff;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

const arrayToGetDiff = [3, 5, 2, 8, 6];

console.log(
  getDiff(
    arrayToGetDiff.length, 
    2, 
    arrayToGetDiff.join(" ")
  )
);