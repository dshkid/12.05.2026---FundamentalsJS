function storeProvision(currStock, orderedProduct) {
  let products = {};

  for (let i = 0; i < currStock.length; i += 2) {

    let product = currStock[i];
    let productQty = Number(currStock[i + 1]);

    products[product] = productQty;
  }
  for (let i = 0; i < orderedProduct.length; i += 2) {

    let product = orderedProduct[i];
    let productQty = Number(orderedProduct[i + 1]);

    if (products[product] === undefined) {
      products[product] = productQty;
    } else {
      products[product] += productQty;
    }
  }
  for (let product in products) {
    console.log(`${product} -> ${products[product]}`);
  }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);