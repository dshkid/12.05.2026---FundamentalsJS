function netherRealms(input) {
  let demons = input.split(/\s*,\s*/);

  demons.sort((a, b) => a.localeCompare(b));

  let healthPattern = /[^0-9+\-*\/.]/g;
  let damagePattern = /[+-]?\d+(\.\d+)?/g;

  for (let demon of demons) {

    let health = 0;

    let letters = demon.match(healthPattern);

    if (letters) {
      for (let letter of letters) {
        health += letter.charCodeAt(0);
      }
    }

    let damage = 0;

    let numbers = demon.match(damagePattern);

    if (numbers) {
      for (let number of numbers) {
        damage += Number(number);
      }
    }

    for (let symbol of demon) {

      if (symbol === '*') {
        damage *= 2;
      }

      if (symbol === '/') {
        damage /= 2;
      }

    }
    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

netherRealms('Gos / ho');