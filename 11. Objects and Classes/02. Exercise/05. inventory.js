function inventory(array) {
  let heroes = [];

  for (let heroString of array) {
    let [heroName, heroLevel, heroItems] = heroString.split(' / ');
    heroLevel = Number(heroLevel);

    let heroObject = {
      name: heroName,
      level: heroLevel,
      items: heroItems
    };

    heroes.push(heroObject);
  }
  heroes.sort((a, b) => a.level - b.level);

  for (let heroObject of heroes) {
    console.log(`Hero: ${heroObject.name}`);
    console.log(`level => ${heroObject.level}`);
    console.log(`items => ${heroObject.items}`);
  }
}

inventory(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']);