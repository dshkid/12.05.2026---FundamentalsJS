function cardGame(input) {
  let players = {};

  let powers = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };

  let types = {
    S: 4,
    H: 3,
    D: 2,
    C: 1
  };

  for (let line of input) {

    let [name, cards] = line.split(": ");

    cards = cards.split(", ");

    if (!players[name]) {
      players[name] = [];
    }

    players[name] = players[name].concat(cards);
  }

  for (let player in players) {

    let uniqueCards = [];

    for (let card of players[player]) {

      if (!uniqueCards.includes(card)) {
        uniqueCards.push(card);
      }
    }

    let total = 0;

    for (let card of uniqueCards) {

      let power = card.slice(0, -1);
      let type = card.slice(-1);

      let powerValue;

      if (isNaN(power)) {
        powerValue = powers[power];
      } else {
        powerValue = Number(power);
      }

      total += powerValue * types[type];
    }

    console.log(`${player}: ${total}`);
  }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD']);