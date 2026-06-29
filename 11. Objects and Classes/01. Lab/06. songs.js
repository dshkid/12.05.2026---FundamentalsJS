function songs(array) {


  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songsCount = Number(array[0]);

  let allSongs = [];

  for (let i = 1; i <= songsCount; i++) {
    let parsedData = array[i].split('_');

    let typeList = parsedData[0];
    let name = parsedData[1];
    let time = parsedData[2];

    let song = new Song(typeList, name, time);

    allSongs.push(song);
  }

  let searchedCommand = array.pop();

  if (searchedCommand !== 'all') {
    allSongs = allSongs.filter(s => s.typeList === searchedCommand);
  }

  let songNames = allSongs.map(s => s.name);

  for (let songName of songNames) {
    console.log(songName);
  }
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);