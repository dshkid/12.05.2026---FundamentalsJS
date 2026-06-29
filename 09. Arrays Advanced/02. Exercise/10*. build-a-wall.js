function buildAWall(sectionHeights) {
  let concreteQuantities = [];
  let totalConcrete = 0;

  while (sectionHeights.some(sectionHeights => sectionHeights < 30)) {
    let dailyConcrete = 0;

    for (let i = 0; i < sectionHeights.length; i++) {
      if (sectionHeights[i] < 30) {
        sectionHeights[i]++;
        dailyConcrete += 195;
      }
    }

    concreteQuantities.push(dailyConcrete);
    totalConcrete += dailyConcrete;
  }

  console.log(concreteQuantities.join(', '));
  console.log(`${totalConcrete * 1900} pesos`);
}

buildAWall([21, 25, 28]);

// 585, 585, 390, 390, 390, 195, 195, 195, 195 
// 5928000 pesos
