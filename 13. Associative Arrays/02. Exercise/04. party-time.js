function partyTime(input) {
  let vip = [];
  let regular = [];

  let index = 0;

  while (input[index] !== 'PARTY') {
    let guest = input[index];

    if (!isNaN(guest[0])) {
      vip.push(guest);
    } else {
      regular.push(guest);
    }
    index++;
  }
  index++;

  while (index < input.length) {
    let guest = input[index];

    let vipIndex = vip.indexOf(guest);

    if (vipIndex !== -1) {
      vip.splice(vipIndex, 1);
    } else {
      let regularIndex = regular.indexOf(guest);

      if (regularIndex !== -1) {
        regular.splice(regularIndex, 1);
      }
    }
    index++;
  }
  console.log(vip.length + regular.length);

  for (let guest of vip) {
    console.log(guest);
  }
  for (let guest of regular) {
    console.log(guest);
  }
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);