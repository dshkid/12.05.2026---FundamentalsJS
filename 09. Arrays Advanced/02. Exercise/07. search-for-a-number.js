function searchForANumber(array1, array2) {
  let [numberOfElement, deletedElement, searchedElement] = array2;

  let reducedArray = array1.slice(0, numberOfElement);

  reducedArray.splice(0, deletedElement);

  let searchedOccurrences = reducedArray.filter(num => num === searchedElement);

  console.log(`Number ${searchedElement} occurs ${searchedOccurrences.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
  [5, 2, 3]);

// Number 3 occurs 1 times.