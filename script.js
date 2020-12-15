"use strict";
let numberOfFilms;
let personalMovieDB = {
  count: 0,
  movies: [],
  actors: "",
  genres: [],
  privat: false,
  toggleMyVisibleDB: function() {
    this.privat = !this.privat;
  },
  start: function() {
    while (!numberOfFilms) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    this.count = numberOfFilms;
  },
  showDataBD: function() {
    if (this.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("error");
    }
  },
  setRatingFilm: function() {
    let film, rating;
  for (let i = 0; i < 2; i++) {
    film = prompt("Один из последних фильмов, которые вы смотрели?", "");
    rating = +prompt("На сколько оцените его?", "");
    if (film.length > 50 || film.length < 0) {
      i--;
      continue;
    }
    this.movies[film] = rating;
  }
  },
  writeYourGenres: function(callback) {
    let genre;
    for (let i = 0; i < 3; i++) {
      genre = false;
      while (genre == false || genre == null) {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        console.log(genre)
      }
      personalMovieDB.genres[i] = genre;
    }
    callback();
  },
  checkLvlPerson: function() {
    if (numberOfFilms > 10) {
      if (numberOfFilms < 30) {
        console.log("Классика");
      }
      console.log("Киноман");
    } else if (numberOfFilms < 10) {
      console.log("мало");
    } else {
      console.log("error");
    }
  },
  showAllGenres: function() {
    personalMovieDB.genres.forEach((key, idx) => {
      console.log(`Любимый жанр №${idx + 1}: ${key}`)
    });
  },

};
// personalMovieDB.start();
//personalMovieDB.writeYourGenres(personalMovieDB.showAllGenres);
// personalMovieDB.showAllGenres();
// personalMovieDB.setRatingFilm();
// personalMovieDB.toggleMyVisibleDB();
// personalMovieDB.showDataBD();
// let el = document.querySelector('div');
// el.style.backgroundColor='blue';
// el.style.marginLeft='100px';


// const now = new Date('2020-05-01');
// console.log(now);


//filter


const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemair'];
const shortName = names.filter(name => name.length <= 5);
console.log(shortName);

const newArr = names.map(name=>{
  return name.toLowerCase();
});
console.log(newArr);

const some = ['dada','qwe', 'sda'];
console.log(some.every(item => typeof(item) === 'string'));
