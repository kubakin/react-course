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
    tabsParent.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains(
                "tabheader__item")) {
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
    console.log(deadLine);

    function timerFunc(t, dl) {
        setTime();

        function changeTime() {
            dl -= 1000;
        }

        function setTime() {
            const hz = changeTime();
            let day;
            let hours;
            let min;
            let sec;
            t[0].innerHTML = day = Math.floor(dl / (1000 * 60 * 60 *
                24));
            t[1].innerHTML = hours = Math.floor((dl / (1000 * 60 *
                60)) % 24);
            t[2].innerHTML = min = Math.floor((dl / (1000 * 60)) % 60);
            t[3].innerHTML = sec = Math.floor((dl / 1000) % 60);
        }
        if (dl.getDate <= 0) {
            clearInterval(interval);
        }
        let interval = setInterval(setTime, 1000);
    }
    timerFunc(timer, deadLine);
    const modal = document.querySelector(".modal"),
        modalClose = modal.querySelector(".modal__close"),
        btns = document.querySelectorAll("[data-modal]");

    function showModal() {
        modal.classList.toggle("show");
        document.documentElement.style.overflow = "hidden";
        clearInterval(intervaID);
    }

    function hideModal() {
        document.documentElement.style.overflow = "scroll";
        modal.classList.toggle("show");
    }

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            showModal();
        });
    });
    modalClose.addEventListener("click", () => {
        hideModal();
    });
    modal.addEventListener("click", (e) => {
        if (e.target.classList === modal) {
            hideModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (modal.classList.contains("show") && e.key ===
            "Escape") {
            hideModal();
        }
    });

    const intervaID = setTimeout(showModal, 15000);

    function showWindowByScroll() {
        if (window.pageYOffset + document.documentElement
            .clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showWindowByScroll);
        }
    }

    window.addEventListener('scroll', showWindowByScroll);






    //Классы


    class Menu {
        constructor(name, text, price, picture) {
            this.price = price;
            this.name = name;
            this.text = text;
            this.picture = picture;
        }
    };

    class Card extends Menu {
        constructor(name, text, price, picture) {
            super(name, text, price, picture);
        }
        addToPage() {
            console.log(this.name)
            return `<div class="menu__item">
            <img src=${this.picture} alt="vegy">
            <h3 class="menu__item-subtitle">${this.name}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>`
        }
    }
    const container = document.querySelector('.menu__field .container');
    const cards = document.querySelectorAll('.menu__item')
    console.log(container);
    container.innerHTML = '';
    const k = new Card('Fit', 'qwerty', 400, 'img/tabs/elite.jpg');
    container.innerHTML += k.addToPage();
    container.innerHTML += k.addToPage();
    container.innerHTML += k.addToPage();

});
