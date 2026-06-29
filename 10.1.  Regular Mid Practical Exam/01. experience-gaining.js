function experienceGaining(array) {
  let experienceAmountNeeded = Number(array.shift());

  let battlesCount = Number(array.shift());

  let gainedExperience = 0;

  let currBattle = 0;


  for (let poins = 0; poins < battlesCount; poins++) {
    let currentPoints = Number(array[poins]);

    currBattle++;


    if (currBattle % 3 === 0) {
      currentPoints *= 1.15;
    }
    if (currBattle % 5 === 0) {
      currentPoints *= 0.9;
    }
    if (currBattle % 15 === 0) {
      currentPoints *= 1.05;
    }
    gainedExperience += currentPoints;

    if (gainedExperience >= experienceAmountNeeded) {
      console.log(`Player successfully collected his needed experience for ${currBattle} battles.`);
      return;
    }
  }

  let neededExperience = experienceAmountNeeded - gainedExperience;
  console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
}

experienceGaining([500,
  5,
  50,
  100,
  200,
  100,
  20])
  ;