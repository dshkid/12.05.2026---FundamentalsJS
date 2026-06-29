function movies(array) {
  let movies = [];

  for (let movieInfo of array) {
    if (movieInfo.includes('addMovie')) {
      let tokens = movieInfo.split('addMovie ');
      let movieName = tokens[1];

      movies.push({ name: movieName });
    } else if (movieInfo.includes('directedBy')) {
      let tokens = movieInfo.split(' directedBy ');
      let [movieName, directorName] = tokens;

      let foundMovieObject = movies.find(movie => movie.name === movieName);

      if (foundMovieObject) {
        foundMovieObject.director = directorName;
      }
    } else if (movieInfo.includes('onDate')) {
      let tokens = movieInfo.split(' onDate ');
      let [movieName, movieDate] = tokens;

      let foundMovieObject = movies.find(movie => movie.name === movieName);

      if (foundMovieObject) {
        foundMovieObject.date = movieDate;
      }
    }
  }

  for (let movieObject of movies) {
    if (movieObject.name && movieObject.director && movieObject.date) {
      console.log(JSON.stringify(movieObject));
    }
  }
}

movies(['addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen']);