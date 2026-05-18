function distanceBetweenPoints(x1, y1, x2, y2) {

  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  let result = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

  console.log(result);
}

distanceBetweenPoints(2, 4, 5, 0);