function solution(a, b) {
  let lastA = a[a.length - 1];
  let firstB = b[0];

  const factors = [];
  for (let index = lastA; index <= firstB; index++) {
    let isFactor = true;

    for (let j = 0; j < a.length; j++) {
      if (index % a[j] !== 0) {
        isFactor = false;
      }
    }

    for (let j = 0; j < b.length; j++) {
      if (b[j] % index !== 0) {
        isFactor = false;
      }
    }

    if (isFactor) {
      factors.push(index);
    }
  }

  return factors.length;
}
