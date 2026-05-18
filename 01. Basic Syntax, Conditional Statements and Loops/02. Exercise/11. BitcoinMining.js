function bitcoinMining(input) {

  let goldPrice = 67.51;
  let bitcoinPrice = 11949.16;

  let money = 0;
  let bitcoins = 0;
  let firstBitcoinDay = 0;

  for (let day = 1; day <= input.length; day++) {
    let gold = Number(input[day - 1]);

    if (day % 3 === 0) {
      gold *= 0.7;
    }

    money += gold * goldPrice;

    while (money >= bitcoinPrice) {
      money -= bitcoinPrice;
      bitcoins++;

      if (bitcoins === 1) {
        firstBitcoinDay = day;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);

  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining(['100', '200', '300']);