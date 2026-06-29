function taxCalculator(array) {

  let newArray = array[0].split('>>');

  let tax = 0;

  let totalTaxes = 0;

  for (let commands of newArray) {
    let [carType, yearsToBePaid, traveledKilometers] = commands.split(' ');

    yearsToBePaid = Number(yearsToBePaid);
    traveledKilometers = Number(traveledKilometers);

    if (carType === 'family') {
      tax = 50;

      tax -= yearsToBePaid * 5;
      tax += Math.floor(traveledKilometers / 3000) * 12;

    } else if (carType === 'heavyDuty') {
      tax = 80;

      tax -= yearsToBePaid * 8;
      tax += Math.floor(traveledKilometers / 9000) * 14;

    } else if (carType === 'sports') {
      tax = 100;

      tax -= yearsToBePaid * 9;
      tax += Math.floor(traveledKilometers / 2000) * 18;
    } else {
      console.log('Invalid car type.');
      continue;
    }
    totalTaxes += tax;
    console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
  }
  console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);