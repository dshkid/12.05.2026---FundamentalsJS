function arenaTier(input) {
  let gladiators = {};

  for (let line of input) {

    if (line === 'Ave Cesar') {
      break;
    }

    if (line.includes('->')) {

      let [gladiator, technique, skill] = line.split(' -> ');
      skill = Number(skill);

      if (!gladiators[gladiator]) {
        gladiators[gladiator] = {};
      }

      if (
        gladiators[gladiator][technique] === undefined ||
        gladiators[gladiator][technique] < skill
      ) {
        gladiators[gladiator][technique] = skill;
      }

    } else {

      let [firstGladiator, secondGladiator] = line.split(' vs ');

      if (
        !gladiators[firstGladiator] ||
        !gladiators[secondGladiator]
      ) {
        continue;
      }

      let commonTechnique = false;

      for (let technique in gladiators[firstGladiator]) {
        if (gladiators[secondGladiator][technique] !== undefined) {
          commonTechnique = true;
          break;
        }
      }

      if (!commonTechnique) {
        continue;
      }

      let firstTotalSkill = 0;
      let secondTotalSkill = 0;

      for (let technique in gladiators[firstGladiator]) {
        firstTotalSkill += gladiators[firstGladiator][technique];
      }

      for (let technique in gladiators[secondGladiator]) {
        secondTotalSkill += gladiators[secondGladiator][technique];
      }

      if (firstTotalSkill > secondTotalSkill) {
        delete gladiators[secondGladiator];
      } else if (secondTotalSkill > firstTotalSkill) {
        delete gladiators[firstGladiator];
      }
    }
  }

  let sortedGladiators = Object.entries(gladiators);

  sortedGladiators.sort((a, b) => {

    let firstTotal = Object.values(a[1]).reduce((sum, x) => sum + x, 0);
    let secondTotal = Object.values(b[1]).reduce((sum, x) => sum + x, 0);

    if (secondTotal !== firstTotal) {
      return secondTotal - firstTotal;
    }

    return a[0].localeCompare(b[0]);
  });

  for (let [gladiator, techniques] of sortedGladiators) {

    let totalSkill = Object.values(techniques).reduce((sum, x) => sum + x, 0);

    console.log(`${gladiator}: ${totalSkill} skill`);

    let sortedTechniques = Object.entries(techniques);

    sortedTechniques.sort((a, b) => {

      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }

      return a[0].localeCompare(b[0]);
    });

    for (let [technique, skill] of sortedTechniques) {
      console.log(`- ${technique} <!> ${skill}`);
    }
  }
}

arenaTier();