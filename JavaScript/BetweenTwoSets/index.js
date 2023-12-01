function solution(a, b) {
  let lastA = a[a.length - 1];
  let firstB = b[0];

  const factor = new Map();
  for (let index = lastA; index <= firstB; index++) {
    factor.set(index, true);

    for (let j = 0; j < a.length; j++) {
      if (index % a[j] !== 0) {
        factor.set(index, false);
      }
    }

    for (let j = 0; j < b.length; j++) {
      if (b[j] % index !== 0) {
        factor.set(index, false);
      }
    }
  }

  let factorAmount = 0;
  for (let [_, value] of factor.entries()) {
    if (value) {
      factorAmount++;
    }
  }

  return factorAmount;
}
