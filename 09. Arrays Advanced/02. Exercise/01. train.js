function train(array) {
  let wagonsContaining = array.shift().split(' ').map(Number);
  let maxCapacityPerWagon = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let command = array[i];

    if (command.includes('Add')) {
      let tokens = command.split(' ');
      let passengers = Number(tokens[1]);

      wagonsContaining.push(passengers);
    } else {
      let passengers = Number(command);

      for (let j = 0; j < wagonsContaining.length; j++) {
        if (wagonsContaining[j] + passengers <= maxCapacityPerWagon) {
          wagonsContaining[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagonsContaining.join(' '));
}

train(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75']);