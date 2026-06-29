function catalogue(array) {
  array.sort((a, b) => a.localeCompare(b));

  let currLetter = '';

  for (let product of array) {
    let [name, price] = product.split(' : ');

    let firstLetter = name[0];

    if (firstLetter !== currLetter) {
      console.log(firstLetter);
      currLetter = firstLetter;
    }
    console.log(`  ${name}: ${price}`);
  }
}

catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);