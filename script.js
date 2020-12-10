"use strict"
let numberOfFilms;
while(!numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
}
if (numberOfFilms > 10){
    if (numberOfFilms < 30) {
        console.log('Классика');
    }
    console.log("Киноман");
}
else if (numberOfFilms < 10){
    console.log('мало');
}
else{
    console.log('error');
}

console.log(numberOfFilms)
let personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: '',
    genres: '',
    privat: '',
}
let film, rating
for (let i = 0; i < 2; i++) {
    film = prompt('Один из последних фильмов, которые вы смотрели?','');
    rating = +prompt('На сколько оцените его?','');
    if (film.length > 50 || film.length < 0) {
        i--;
        continue;
    }
    personalMovieDB.movies[film] = rating;
}
let counter = 0;
while (counter < 2) {
    film = prompt('Один из последних фильмов, которые вы смотрели?','');
    rating = +prompt('На сколько оцените его?','');
    if (film.length > 50 || film.length < 0) {
        continue;
    }
    counter++;
}
do {
    film = prompt('Один из последних фильмов, которые вы смотрели?','');
    rating = +prompt('На сколько оцените его?','');
    if (film.length > 50 || film.length < 0) {
        continue;
    }
    counter++;
} while(counter < 1)
// personalMovieDB.movies.push({film:rating})
// console.log(personalMovieDB)
// personalMovieDB.movies[film] = rating
// personalMovieDB.movies[film2] = rating2
console.log(personalMovieDB);