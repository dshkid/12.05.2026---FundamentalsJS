function schoolGrades(input) {
  let map = new Map();

  for (let data of input) {
    let [name, ...grades] = data.split(' ');

    grades = grades.map(Number);

    if (map.has(name)) {
      let currGrades = map.get(name);

      currGrades = currGrades.concat(grades);

      map.set(name, currGrades);

    } else {
      map.set(name, grades)
    }
  }
  let avgGrades = new Map();

  for (let [name, grades] of map) {
    let sum = 0;

    for (let grade of grades) {
      sum += grade;
    }
    let average = sum / grades.length;

    avgGrades.set(name, average);
  }
  let sortedResult = Array.from(avgGrades).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, averageGrade] of sortedResult) {
    console.log(`${name}: ${averageGrade.toFixed(2)}`);
  }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);