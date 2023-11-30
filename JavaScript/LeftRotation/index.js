function solution(d, arr) {
    let arrAux = [...arr];

    const rotationArrayLeft = (array) => {
        const removedValue = array.shift();
        array.push(removedValue);
        return array;
    }

    for (let index = 0; index < d; index++) {
        arrAux = rotationArrayLeft(arrAux);
    }

    return arrAux;
}