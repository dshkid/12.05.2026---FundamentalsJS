function race(input) {
  let participants = input.shift().split(', ');

  let racers = {};

  for (let racer of participants) {
    racers[racer] = 0;
  }

  let lettersPattern = /[A-Za-z]/g;
  let digitsPattern = /\d/g;

  for (let line of input) {

    if (line === 'end of race') {
      break;
    }

    let letters = line.match(lettersPattern);

    let name = letters.join('');

    let digits = line.match(digitsPattern);

    let distance = 0;

    if (digits) {
      for (let digit of digits) {
        distance += Number(digit);
      }
    }

    if (racers[name] !== undefined) {
      racers[name] += distance;
    }
  }

  let sorted = Object.entries(racers);

  sorted.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);