function chessBoard(n) {

  let result = '<div class="chessboard">\n';

  for (let row = 0; row < n; row++) {

    result += ' <div>\n';

    for (let col = 0; col < n; col++) {

      if ((row + col) % 2 === 0) {
        result += '   <span class="black"></span>\n';
      } else {
        result += '   <span class="white"></span>\n';
      }

    }
    result += ' </div>\n';
  }
  result += '</div>';

  console.log(result);
}

chessBoard(3);