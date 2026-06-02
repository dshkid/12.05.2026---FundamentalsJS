function tseamAccount(input) {
  let games = input.shift().split(' ');


  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' ');
    let comand = tokens[0];

    if (comand === 'Play!') {
      break;
    }

    let game = tokens[1];

    if (comand === 'Install') {
      if (!games.includes(game)) {
        games.push(game);
      }

    } else if (comand === 'Uninstall') {
      let index = games.indexOf(game);
      if (index !== -1) {
        games.splice(index, 1)
      }
    } else if (comand === 'Update') {
      let index = games.indexOf(game);
      if (index !== -1) {
        games.splice(index, 1);
        games.push(game);
      }
    } else if (comand === 'Expansion') {
      let [baseGame, expansion] = game.split('-');
      let index = games.indexOf(baseGame);

      if (index !== -1) {
        let newGame = `${baseGame}:${expansion}`;
        games.splice(index + 1, 0, newGame);
      }
    }
  }
  console.log(games.join(' '));
}

tseamAccount(
  ['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);