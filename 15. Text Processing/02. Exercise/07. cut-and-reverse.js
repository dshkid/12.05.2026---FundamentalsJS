function cutAndReverse(string) {
  let middleIndex = string.length / 2;

  let leftHalf = string.substring(0, middleIndex).split('').reverse().join('');
  let rightHalf = string.substring(middleIndex).split('').reverse().join('');

  console.log(leftHalf);
  console.log(rightHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');