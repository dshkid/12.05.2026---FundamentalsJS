function addressBook(array) {
  let addressBook = {};

  for (let entry of array) {
    let parsedData = entry.split(':');

    [fullName, address] = parsedData;

    addressBook[fullName] = address;
  }

  let addressBookEntries = Object.entries(addressBook);

  addressBookEntries.sort((first, second) => {
    let firstKey = first[0];
    let secondKey = second[0];

    return firstKey.localeCompare(secondKey);
  });

  for (let [fullName, address] of addressBookEntries) {
    console.log(`${fullName} -> ${address}`);
  }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);