function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;

  let layers = 0;
  let size = base;

  while (size > 2) {
    layers++;

    let stoneArea = (size - 2) * (size - 2);
    let decorArea = size * size - stoneArea;

    stone += stoneArea * increment;

    if (layers % 5 === 0) {
      lapisLazuli += decorArea * increment;
    } else {
      marble += decorArea * increment;
    }

    size -= 2;
  }

  layers++;
  gold += size * size * increment;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(layers * increment)}`);
}

thePyramidOfKingDjoser(11, 0.75)