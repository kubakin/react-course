/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const reklama = document.querySelector('.promo__adv'),
imgsOfReklama = reklama.querySelectorAll('img'),
promoBG = document.querySelector('.promo__bg'),
genre = promoBG.querySelector('.promo__genre'),
movieList = document.querySelector('.promo__interactive-list'),
films = document.querySelectorAll('.promo__interactive-item');

imgsOfReklama.forEach(item => {
    item.remove()
})
genre.textContent = 'Драма';
promoBG.style.backgroundImage ='url("img/bg.jpg")';

films.forEach(item =>{
    item.remove();
})
movieDB.movies.sort().forEach((item,idx) =>{
    movieList.innerHTML += `<li class="promo__interactive-item">${idx+1}:${item}</li>`;  
})