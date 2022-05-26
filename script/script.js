"use strict"; //строгий режим

const numberOffilms = +prompt("Сколько фильмов вы посмотрели ?", "");

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  priver: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколтко оцените?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколтко оцените?", "");

  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[c] = d;

  console.log(personalMovieDB);