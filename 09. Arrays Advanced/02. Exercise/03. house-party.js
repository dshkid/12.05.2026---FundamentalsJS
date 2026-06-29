function houseParty(array) {
  let guests = [];

  for (let command of array) {

    if (command.includes('is going!')) {
      let name = command.replace(' is going!', '');

      if (guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guests.push(name);
      }
    } else {
      let name = command.replace(' is not going!', '');

      if (guests.includes(name)) {
        let index = guests.indexOf(name);
        guests.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(guests.join('\n'));
}

houseParty(['Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!']);

// John is not in the list!
// Allie

// houseParty(['Tom is going!',
//   'Annie is going!',
//   'Tom is going!',
//   'Garry is going!',
//   'Jerry is going!']);

// Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry
