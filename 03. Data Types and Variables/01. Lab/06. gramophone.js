function gramophone(bandName, albumName, songName) {
  let time = (albumName.length * bandName.length) * songName.length / 2;

  let rotationsCount = Math.ceil(time / 2.5);

  console.log(`The plate was rotated ${rotationsCount} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel');