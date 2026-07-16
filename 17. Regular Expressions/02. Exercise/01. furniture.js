function furniture(input) {

  let regex = />>([A-Z][A-Za-z]+)<<(\d+(\.\d+)?)!(\d+)/;

  let furnitureList = [];
  let total = 0;

  for (let line of input) {
    if (line === 'Purchase') {
      break;
    }
    let match = line.match(regex);

    if (match) {
      let name = match[1];
      let price = Number(match[2]);
      let qty = Number(match[4]);

      furnitureList.push(name);

      total += price * qty;
    }
  }
  console.log('Bought furniture:');

  for (let furniture of furnitureList) {
    console.log(furniture);
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);