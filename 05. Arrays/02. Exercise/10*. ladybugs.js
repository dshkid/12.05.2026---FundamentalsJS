function ladybugs(input) {
  let fieldSize = Number(input[0]);
  let ladyBugs = [];

  for (let i = 0; i < fieldSize; i++) {
    ladyBugs.push(0);
  }

  let indexes = input[1].split(' ');

  for (let i = 0; i < indexes.length; i++) {
    let index = Number(indexes[i]);

    if (index >= 0 && index < ladyBugs.length) {
      ladyBugs[index] = 1;
    }
  }

  for (let i = 2; i < input.length; i++) {

    let tokens = input[i].split(' ');

    let ladybugIndex = Number(tokens[0]);
    let direction = tokens[1];
    let flyLength = Number(tokens[2]);

    if (ladybugIndex < 0 || ladybugIndex >= ladyBugs.length || ladyBugs[ladybugIndex] === 0) {
      continue;
    }
    ladyBugs[ladybugIndex] = 0;

    let nextPosition;

    if (direction === 'right') {
      nextPosition = ladybugIndex + flyLength;

      while (nextPosition >= 0 && nextPosition < ladyBugs.length && ladyBugs[nextPosition] === 1) {
        nextPosition += flyLength;
      }
    } else {
      nextPosition = ladybugIndex - flyLength;

      while (nextPosition >= 0 && nextPosition < ladyBugs.length && ladyBugs[nextPosition] === 1) {
        nextPosition -= flyLength;
      }
    }

    if (nextPosition >= 0 && nextPosition < ladyBugs.length) {
      ladyBugs[nextPosition] = 1;
    }
  }
  console.log(ladyBugs.join(' '));
}

ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);