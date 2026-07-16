function starEnigma(input) {
  let n = Number(input.shift());

  let attacked = [];
  let destroyed = [];

  let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

  for (let i = 0; i < n; i++) {

    let encrypted = input[i];
    let key = 0;

    for (let ch of encrypted.toLowerCase()) {
      if (ch === 's' || ch === 't' || ch === 'a' || ch === 'r') {
        key++;
      }
    }
    let decrypted = '';

    for (let ch of encrypted) {
      decrypted += String.fromCharCode(ch.charCodeAt(0) - key);
    }

    let match = decrypted.match(pattern);

    if (match) {

      let planet = match.groups.planet;
      let attackType = match.groups.type;

      if (attackType === 'A') {
        attacked.push(planet);
      } else {
        destroyed.push(planet);
      }
    }
  }

  attacked.sort((a, b) => a.localeCompare(b));
  destroyed.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attacked.length}`);

  for (let planet of attacked) {
    console.log(`-> ${planet}`);
  }

  console.log(`Destroyed planets: ${destroyed.length}`);

  for (let planet of destroyed) {
    console.log(`-> ${planet}`);
  }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);