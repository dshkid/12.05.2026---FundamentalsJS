function guineaPig(array) {

  let foodQty = Number(array.shift()) * 1000;
  let hay = Number(array.shift()) * 1000;
  let cover = Number(array.shift()) * 1000;
  let pigWeight = Number(array.shift()) * 1000;

  for (let day = 1; day <= 30; day++) {
    foodQty -= 300;

    if (day % 2 === 0) {
      hay -= 0.05 * foodQty;
    }
    if (day % 3 === 0) {
      cover -= (1 / 3) * pigWeight;
    }
  }

  if (foodQty <= 0 || hay <= 0 || cover <= 0) {
    console.log('Merry must go to the pet store!');
    return;
  }

  console.log(`Everything is fine! Puppy is happy! Food: ${(foodQty / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}

guineaPig(["10", "5", "5.2", "1"]);