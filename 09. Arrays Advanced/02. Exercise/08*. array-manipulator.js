function arrayManipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(' ');
    let action = tokens.shift();

    if (action === 'add') {
      let index = Number(tokens.shift());
      let element = Number(tokens.shift());
      numbers.splice(index, 0, element);

    } else if (action === 'addMany') {
      let index = Number(tokens.shift());
      let elements = tokens.map(Number);
      numbers.splice(index, 0, ...elements);

    } else if (action === 'contains') {
      let element = Number(tokens.shift());
      console.log(numbers.indexOf(element));

    } else if (action === 'remove') {
      let index = Number(tokens.shift());
      numbers.splice(index, 1);

    } else if (action === 'shift') {
      let rotations = Number(tokens.shift());

      for (let rotation = 1; rotation <= rotations; rotation++) {
        let firstElement = numbers.shift();
        numbers.push(firstElement);
      }

    } else if (action === 'sumPairs') {
      let pairSums = [];

      for (let i = 0; i < numbers.length; i += 2) {
        let currNumber = numbers[i];
        let nextNumber = numbers[i + 1];

        if (nextNumber) {
          pairSums.push(currNumber + nextNumber);
        } else {
          pairSums.push(currNumber);
        }
      }
      numbers = pairSums;

    } else if (action === 'print') {
      console.log(`[ ${numbers.join(', ')} ]`);
    }
  }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3', 'print']);

// 0
// -1
// [ 1, 8, 2, 4, 5, 6, 7 ]