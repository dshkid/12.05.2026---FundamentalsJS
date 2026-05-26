function requiredReading(numberOfPages, pagesPerHour, daysCount) {
  let totalReadingTime = numberOfPages / pagesPerHour;

  let hourNeededPerDay = totalReadingTime / daysCount;

  console.log(hourNeededPerDay);
}

requiredReading(432, 15, 4);