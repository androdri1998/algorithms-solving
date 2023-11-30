function solution(grades) {
  const gradeMap = new Map();

  let multiple = 0;
  for (let index = 0; index <= 100; index++) {
    gradeMap.set(index, multiple);

    if (index === multiple) {
      multiple += 5;
    }
  }

  for (let index = 0; index < grades.length; index++) {
    let currentGrade = grades[index];

    if (currentGrade < 38) {
      continue;
    }

    let nextMultiple = gradeMap.get(currentGrade);
    let steps = nextMultiple - currentGrade;

    if (steps < 3) {
      grades[index] = nextMultiple;
    }
  }

  return grades;
}
