"use strict"; //строгий режим

let numberOffilms;

const start = () => {
  numberOffilms = +prompt("Сколько фильмов вы посмотрели ?", "");

  while (numberOffilms == "" || numberOffilms == null || isNaN(numberOffilms)) {
    numberOffilms = +prompt("Сколько фильмов вы посмотрели ?", "");
  }
};

start();

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};
const rememberMyFilm = () => {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколтко оцените?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
};

rememberMyFilm();

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
};

detectPersonalLevel();

console.log(personalMovieDB);



const showMyDB = (hiden) => {
  if (!hiden) {
    console.log(personalMovieDB);
  }
};

showMyDB(personalMovieDB.privet);

const writeYourGenres  = () => {
  for(let i = 1; i <=4; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
};

writeYourGenres();