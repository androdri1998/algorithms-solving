const checkConstraintsString = (string) => {
  const stringWithoutSpace = string.replace(/\s/g, "");
  const length = stringWithoutSpace.length;
  const lengthSquare = Math.sqrt(length);
  const lengthFloor = Math.floor(lengthSquare);
  const lengthCeil = Math.ceil(lengthSquare);

  if(lengthFloor <= lengthCeil && 
    length >= 1 && 
    length <= 81) {
    return true;
  }

  return false;
}

const getAmountRowsAndColumns = (string) => {
  const stringWithoutSpace = string.replace(/\s/g, "");
  const length = stringWithoutSpace.length;
  const lengthSquare = Math.sqrt(length);
  let rows = Math.floor(lengthSquare);
  let columns = Math.ceil(lengthSquare);

  let checkRowTimesColumns = rows * columns;

  for(;checkRowTimesColumns < length;) {
    if(rows < columns) {
      rows += 1;
      checkRowTimesColumns = rows * columns;
    } else if(columns <= Math.ceil(lengthSquare)){
      rows += 1;
      columns += 1;
      checkRowTimesColumns = rows * columns;
    } else {
      break;
    }
  }

  return {
    rows,
    columns,
  };
}

const encryptString = (string) => {
  if(checkConstraintsString(string)) {
    const { rows, columns } = getAmountRowsAndColumns(string);
    
    const stringReplaced = string.replace(/\s/g, "");
    const stringEncryptedArray = [];
    let currentRow = 0;
    let currentColumn = 0;
    for(let letter of stringReplaced) {
      if(!stringEncryptedArray[currentRow]) {
        stringEncryptedArray.push([]);
        stringEncryptedArray[currentRow][currentColumn] = letter;
      } else {
        stringEncryptedArray[currentRow][currentColumn] = letter;
      }

      if(currentRow < rows){
        currentRow += 1;
      } else {
        currentRow = 0;
        if(currentColumn < columns) {
          currentColumn += 1;
        }
      }
    }

    const stringEncrypted = [];
    stringEncryptedArray.forEach(currentString => {
      stringEncrypted.push(currentString.join(''));
    })

    return stringEncrypted.join(' ');
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

console.log(encryptString("good morning"));