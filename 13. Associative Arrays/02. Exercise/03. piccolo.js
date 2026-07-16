function piccolo(array) {
  let parkedCars = new Set();

  for (let carInfo of array) {
    let [direction, carNumber] = carInfo.split(', ');

    if (direction === 'IN') {
      parkedCars.add(carNumber);
    } else {
      parkedCars.delete(carNumber);
    }
  }

  if (parkedCars.size === 0) {
    console.log('Parking Lot is Empty');
  } else {
    let parkedCarsArr = Array.from(parkedCars).sort((a, b) => a.localeCompare(b));
    console.log(parkedCarsArr.join('\n'));
  }
}

piccolo(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU']);