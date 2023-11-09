function solution(grades) {
  for (let index = 0; index < grades.length; index++) {
    if (grades[index] < 38) {
      continue;
    }

    let nextMultiple = grades[index];
    let steps = 0;

    while (nextMultiple % 5 !== 0) {
      steps++;
      nextMultiple++;
    }

    if (steps < 3) {
      grades[index] = nextMultiple;
      continue;
    }
  }

  return grades;
}
