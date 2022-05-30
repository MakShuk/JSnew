"use strict"; //строгий режим

const numberOffilms = +prompt("Сколько фильмов вы посмотрели ?", "");

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  priver: false,
};


  for(let i = 0; i < 2; i++){
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколтко оцените?", "");
        if(a != null && b != null && a != '' && b !='' && a.length < 50) {
             personalMovieDB.movies[a] = b;
             console.log('done');
        } else {
            console.log('error');
            i--;
        }
  }

  if(personalMovieDB.count < 10){
      console.log('Просмотренно мало фильмов');
  } else if (personalMovieDB.count >= 10 )

  console.log(personalMovieDB);