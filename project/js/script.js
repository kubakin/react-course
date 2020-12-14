"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
  removeFilm: function (deleteThis) {
    this.movies = this.movies.filter((film,idx) => idx != deleteThis)
  },
  addFilm: function (film) {
    this.movies.push(film);
    this.movies.sort();
  },
};

function drawFilmList() {

    movieList.innerHTML = "",
    movieDB.movies.sort().forEach((item, idx) => {
      if (item.length > 21) {
        item = item.slice(0, 21);
        item += "...";
      }
      movieList.innerHTML += `<li class="promo__interactive-item">${
        idx + 1
      }:${item}<div class='delete'></div></li>`;
      const dlts = movieList.querySelectorAll('.delete');
      dlts.forEach((dlt,index) =>{

      dlt.addEventListener('click', ()=>{
        dlt.parentElement.remove();
        movieDB.removeFilm(index);
        drawFilmList();
      })
    })
    });
}

function start() {
  imgsOfReklama.forEach((item) => {
    item.remove();
  });
  drawFilmList();
  genre.textContent = "Драма";
  promoBG.style.backgroundImage = 'url("img/bg.jpg")';

}



const reklama = document.querySelector(".promo__adv"),
  imgsOfReklama = reklama.querySelectorAll("img"),
  promoBG = document.querySelector(".promo__bg"),
  genre = promoBG.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list"),
  films = document.querySelectorAll(".promo__interactive-item"),
  subm = document.querySelector(".add").querySelector("button"),
  inpCheckBox = document.querySelector(".add").querySelectorAll("input")[1],
  inp = document.querySelector(".add").querySelector(".adding__input");

start();

subm.addEventListener("click", (e) => {
  e.preventDefault();
  movieDB.addFilm(inp.value);
  if (inpCheckBox.checked == true) {
    console.log("Добавлен в избранное");
  }
  drawFilmList();
});


