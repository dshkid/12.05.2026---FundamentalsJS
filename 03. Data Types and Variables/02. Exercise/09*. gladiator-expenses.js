function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let totalExpenses = 0;
  let brokenHelmetCount = 0;
  let brokenSwordCount = 0;
  let brokenShieldCount = 0;
  let brokenArmorCount = 0;

  for (let game = 1; game <= lostFightCount; game++) {
    if (game % 2 === 0) {
      brokenHelmetCount++;
    }
    if (game % 3 === 0) {
      brokenSwordCount++;
    }
    if (game % 2 === 0 && game % 3 === 0) {
      brokenShieldCount++;
      if (brokenShieldCount % 2 === 0) {
        brokenArmorCount++;
      }
    }
  }
  totalExpenses = (brokenHelmetCount * helmetPrice) + (brokenSwordCount * swordPrice) + (brokenShieldCount * shieldPrice) + (brokenArmorCount * armorPrice);

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);