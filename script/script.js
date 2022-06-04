"use strict"; //строгий режим

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
  start() {
    this.count = +prompt("Сколько фильмов вы посмотрели ?", "");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы посмотрели ?", "");
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколтко оцените?", "").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        this.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB(hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB() {
    if (this.privet) {
      this.privet = false;
    } else {
      this.privet = true;
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не вввели их вовсе");
        i--;
      } else {
        this.genres[i - 1] = genre;
      }
    }
    this.genres.forEach((value, i) => {
       console.log(`Ваш любимый жанр  ${i + 1 } - это ${value}`);
    });
  },
};
