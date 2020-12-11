"use strict"
let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: '',
    genres: [],
    privat: false
}
function start(){
    while(!numberOfFilms) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
    personalMovieDB.count = numberOfFilms;

}
// console.log(numberOfFilms)
function showDataBD() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
    else {
        console.log('error')
    }
}
function setRatingFilm() {
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
}
function writeYourGenres() {
    let genre;
    for (let i = 0; i < 3; i++) {
        genre = false
        while (genre == false) {
        genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
        personalMovieDB.genres[i] = genre

    }
}
function checkLvlPerson() {
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
}
start();
setRatingFilm();
checkLvlPerson();
showDataBD();
writeYourGenres();
// let counter = 0;
// while (counter < 2) {
//     film = prompt('Один из последних фильмов, которые вы смотрели?','');
//     rating = +prompt('На сколько оцените его?','');
//     if (film.length > 50 || film.length < 0) {
//         continue;
//     }
//     counter++;
// }
// do {
//     film = prompt('Один из последних фильмов, которые вы смотрели?','');
//     rating = +prompt('На сколько оцените его?','');
//     if (film.length > 50 || film.length < 0) {
//         continue;
//     }
//     counter++;
// } while(counter < 1)
// personalMovieDB.movies.push({film:rating})
// console.log(personalMovieDB)
// personalMovieDB.movies[film] = rating
// personalMovieDB.movies[film2] = rating2
console.log(personalMovieDB);