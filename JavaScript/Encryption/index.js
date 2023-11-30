function solution(s) {
  const n = s.length;
  const rows = Math.floor(Math.sqrt(n));
  const columns = Math.ceil(Math.sqrt(n));
  const result = [];

  for (let col = 0; col < columns; col++) {
    const temp = [];
    let row = 0;
    while (col + row < n) {
      temp.push(s[col + row]);
      row += columns;
    }

    result.push(temp.join(""));
  }

  return result.join(' ');
}
