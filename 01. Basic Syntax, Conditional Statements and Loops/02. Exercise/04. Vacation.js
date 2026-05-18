function vacation(peopleCount, groupType, weekDay) {
  let pricePerPerson = 0;

  if (weekDay === 'Friday') {
    switch (groupType) {
      case 'Students': pricePerPerson = 8.45; break;
      case 'Business': pricePerPerson = 10.9; break;
      case 'Regular': pricePerPerson = 15; break;
    }
  } else if (weekDay === 'Saturday') {
    switch (groupType) {
      case 'Students': pricePerPerson = 9.8; break;
      case 'Business': pricePerPerson = 15.6; break;
      case 'Regular': pricePerPerson = 20; break;
    }
  } else if (weekDay === 'Sunday') {
    switch (groupType) {
      case 'Students': pricePerPerson = 10.46; break;
      case 'Business': pricePerPerson = 16; break;
      case 'Regular': pricePerPerson = 22.5; break;
    }
  }
  let totalPrice = peopleCount * pricePerPerson;

  if (groupType === 'Students' && peopleCount >= 30) {
    totalPrice *= 0.85;
  } else if (groupType === 'Business' && peopleCount >= 100) {
    totalPrice = totalPrice - (10 * pricePerPerson);
  } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40, 'Regular', 'Saturday');