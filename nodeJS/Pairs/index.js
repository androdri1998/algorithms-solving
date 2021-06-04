const checkConstraintN = (n) => {
  if(parseInt(n) >= 2 && parseInt(n) <= Math.pow(10, 5)) {
    return true;
  }

  return false;
}

const checkConstraintK = (k) => {
  if(parseInt(k) > 0 && parseInt(k) < Math.pow(10, 9)) {
    return true;
  }

  return false;
}

const checkConstraintArr = (arrString) => {
  const array = arrString.split(" ");
  let isInvalid = array.some((value) => parseInt(value) < 0 || parseInt(value) >= (Math.pow(2, 31) - 1));
  isInvalid = array.some((value, index) => array.indexOf(value) !== index);

  const isValid = !isInvalid;
  return isValid;
}

const getAmountPairs = (arr, k) => {
  const array = arr.split(" ");
  const pairs = [];

  array.forEach((value) => {
    array.forEach((valueToPair) => {
      let higherValue = 0;
      let smallerValue = 0;
      
      if(parseInt(value) > parseInt(valueToPair)) {
        higherValue = parseInt(value);
        smallerValue = parseInt(valueToPair);
      } else {
        higherValue = parseInt(valueToPair);
        smallerValue = parseInt(value);
      }

      if(higherValue - smallerValue === parseInt(k)) {
        const pair = `[${higherValue}, ${smallerValue}]`;
        if(!pairs.includes(pair)) {
          pairs.push(pair);
        }
      }
    })
  });

  const amountPairs = pairs.length;

  return amountPairs;
}

const getItemsEquals = (n, k, arr) => {
  if(checkConstraintN(n) && 
    checkConstraintK(k) && 
    checkConstraintArr(arr)) {
    const amountPairs = getAmountPairs(arr, k);

    return amountPairs;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(getItemsEquals(4, 4, [1, 5, 2, 6].join(" ")));