function dayOfWeek(day) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let currDay = '';

  if (day >= 1 && day <= 7) {
    switch (day) {
      case 1: currDay = days[0]; break;
      case 2: currDay = days[1]; break;
      case 3: currDay = days[2]; break;
      case 4: currDay = days[3]; break;
      case 5: currDay = days[4]; break;
      case 6: currDay = days[5]; break;
      case 7: currDay = days[6]; break;
    }
  } else {
    console.log('Invalid day!');
  }
  console.log(currDay);
}

dayOfWeek(11);