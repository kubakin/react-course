const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
console.log(numberOfFilms)
let personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: '',
    genres: '',
    privat: '',
}
const film = prompt('Один из последних фильмов, которые вы смотрели?',''),
      rating = prompt('На сколько оцените его?',''),
      film2 = prompt('Один из последних фильмов, которые вы смотрели?',''),
      rating2 = prompt('На сколько оцените его?','');
// personalMovieDB.movies.push({film:rating})
// console.log(personalMovieDB)
personalMovieDB.movies[film] = rating
personalMovieDB.movies[film2] = rating2
console.log(personalMovieDB)