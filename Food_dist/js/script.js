"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");

      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
  // tabs.forEach((item,idx) => {
  //     item.addEventListener('click', ()=>{
  //         hideTabContent();
  //         showTabContent(idx);
  //     })
  // });
  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (e.target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });
  let deadLine = new Date("2020-12-16") - new Date();
  const timer = document.querySelectorAll(".timer__block span");
  console.log(deadLine)

function timerFunc(t,dl) {
    setTime();
  function changeTime() {
    dl -= 1000;
    console.log(dl)
  }
  function setTime() {
    const hz = changeTime();
    let day;
    let hours;
    let min;
    let sec;
    t[0].innerHTML = day= Math.floor(dl / (1000 * 60 * 60 * 24));
    t[1].innerHTML = hours = Math.floor((dl / (1000 * 60 * 60) % 24));
    t[2].innerHTML = min = Math.floor((dl / (1000 * 60) % 60));
    t[3].innerHTML = sec = Math.floor((dl / 1000 ) % 60)
  }
  if(dl.getDate <= 0) {
    clearInterval(interval)
  }
  let interval = setInterval(setTime, 1000);

}
timerFunc(timer, deadLine);
});
