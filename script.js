let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
console.log(numberOfFilms)
let personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: '',
    genres: '',
    privat: '',
}
let film = prompt('Один из последних фильмов, которые вы смотрели?','')
let rating = prompt('На сколько оцените его?','')
personalMovieDB.movies.push({film:rating})
console.log(personalMovieDB)