function barIncome(input) {
  let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;

  let income = 0;

  for (let line of input) {

    if (line === "end of shift") {
      break;
    }

    let match = line.match(pattern);

    if (match) {

      let customer = match.groups.customer;
      let product = match.groups.product;
      let count = Number(match.groups.count);
      let price = Number(match.groups.price);

      let totalPrice = count * price;

      income += totalPrice;

      console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);