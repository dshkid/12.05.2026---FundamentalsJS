function spiceMustFlow(startingYield) {
  let spiceExtracted = 0;
  let workedDays = 0;

  while (startingYield >= 100) {
    spiceExtracted += startingYield;
    startingYield -= 10;

    if (spiceExtracted >= 26) {
      spiceExtracted -= 26;
    }

    workedDays++;
  }
  if (spiceExtracted >= 26) {
    spiceExtracted -= 26;
  }
  console.log(workedDays);
  console.log(spiceExtracted);
}

spiceMustFlow(111);