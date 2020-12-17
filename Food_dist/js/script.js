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

    function setNull(k) {
        if (k < 10) {
            return '0' + k
        } else {
            return k;
        }
    };

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
        modal.classList.remove('show');
    }

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            showModal();
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target.classList === modal.classList || e.target
            .getAttribute('data-close') == '') {
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
            this.class = document.querySelector(
                '.menu__field .container');
        }
        addToPage() {
            this.class.innerHTML += `<div class="menu__item">
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

    const posterFunction = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: data
        });
        return await res.json();
    };
    const getResource = async (url) => {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(
                `could not fetch ${url}, status: ${res.status}`
            );
        }
        return await res.json();
    };


    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('lds-dual-ring')
            form.append(statusMessage);
            const obj = {};
            new FormData(form)
                .forEach((value, key) => {
                    obj[key] = value;
                })
            posterFunction('http://localhost:3000/requests',
                    JSON.stringify(obj))
                .then(data => {
                    showThanksModal(message.success);
                }).catch(() => {
                    showThanksModal(message.fail);
                }).finally(() => {
                    form.reset();
                })
            // request.open('POST', 'server.php');
            // //request.setRequestHeader('Content-type', 'multipart/form-data') при отправке формы не требуется
            // const formData = new FormData(form);
            // request.send(formData);
            // request.addEventListener('load', () => {
            //     statusMessage.remove();
            //     if (request.status == 200) {
            //         showThanksModal(message.success);
            //         form.reset();
            //     } else {
            //     }

            // })
        });
    };
    const forms = document.querySelectorAll('form');
    const message = {
        loading: '<div class="lds-dual-ring"></div>',
        success: 'Спасибо',
        fail: 'Epic fail!',
    }


    forms.forEach(form => {
        postData(form);
    })


    function showThanksModal(msg) {
        const prevModal = document.querySelector('.modal__dialog');
        prevModal.classList.add('hide');
        // showModal();
        const thxModal = document.createElement('div');
        thxModal.classList.add('modal__dialog');
        thxModal.innerHTML = `
        <div class='modal__content'>
            <div data-close class="modal__close">×</div>
            <div class="modal__title">${msg}</div>
            <button data-close class="btn btn_dark btn_min">ОК</button>
        </div>
        `
        const mod = document.querySelector('.modal');
        mod.append(thxModal);
        const intervalID = setTimeout(() => {
            thxModal.remove();
            prevModal.classList.add('show');
            prevModal.classList.remove('hide');
            hideModal();

        }, 4000);

    }
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                title,
                descr,
                price,
                img
            }) => {
                new Card(title, descr, price,
                    img).addToPage();
            })
        })





    //slider


    let ticker = 0;
    let offset = 0;
    const back = document.querySelector('.offer__slider-prev'),
        up = document.querySelector('.offer__slider-next'),
        pcsOfSlider = document.querySelector('.offer__slider'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        sliderWrapper = document.querySelector(
            '.offer__slider-wrapper'),
        sliderInner = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(sliderWrapper).width;
    console.log(width)
    const slides = document.querySelectorAll('.offer__slide');

    sliderInner.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    up.addEventListener('click', () => {
        if (ticker >= slides.length - 1) {
            offset = 0
            ticker = 0;
        } else {
            offset = ++ticker * parseInt(width)
            // ticker++;
        }
        displaySlide(ticker);

    })
    back.addEventListener('click', () => {
        if (ticker <= 0) {
            offset = parseInt(width) * (slides.length - 1)
            ticker = slides.length - 1;
        } else {
            offset -= parseInt(width)
            ticker--;
        }
        displaySlide(ticker);

    })

    function displaySlide(tick) {
        sliderInner.style.transform =
            `translate(-${parseInt(width) * tick}px)`
        changeCounter(tick);
        changeActive(tick);
    }

    //slider1

    function changeCounter(count = 0) {
        current.innerHTML = setNull(+count + 1);
        total.innerHTML = setNull(slides.length);
    }
    // function showNewSlide(tik) {
    //     slides.forEach(item => {
    //         if (slides[tik] == item) {
    //             slides[tik].classList.remove('hide');
    //         } else {
    //             item.classList.add('hide');
    //         }
    //     })
    // };

    // up.addEventListener('click', () => {
    //     if (ticker < pcsOfSlider.length - 1) {
    //         showNewSlide(++ticker);
    //     } else {
    //         ticker = -1;
    //         showNewSlide(++ticker);
    //     }
    //     changeCounter();

    // })
    // back.addEventListener('click', () => {
    //     if (ticker > 0) {
    //         showNewSlide(--ticker);
    //     } else {
    //         ticker = pcsOfSlider.length;
    //         showNewSlide(--ticker);
    //     }
    //     changeCounter();
    // })




    //slider navigation
    let dots = [];
    const slider = document.querySelector('.offer__slider');
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    slides.forEach((slide, idx) => {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', idx);
        dot.classList.add('dot')
        dots.push(dot)
        indicators.append(dot);
    })

    function changeActive(tek = 0) {
        dots.forEach((dt, idx) => {
            if (tek == idx) {
                dt.style.opacity = 1;
            } else {
                dt.style.opacity = 0.5;
            }
        })
    }

    indicators.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-slide-to')) {
            ticker = e.target.getAttribute('data-slide-to')
            displaySlide(ticker)
        }
    })


    changeCounter();
    changeActive();







    //calculate


    const activeButton = document.querySelector(
        '.calculating__choose_big')
    const buttnsActivity = document.querySelectorAll(
        '.calculating__choose_big .calculating__choose-item');
    const sexs = document.querySelectorAll('#gender div');
    const sex = document.querySelector('#gender');
    let obj = {};
    const result = document.querySelector('.calculating__result span');

    function calc() {
        if (obj.weight && obj.height && obj.age && obj.k) {
            if (obj.sex == 'male') {
                return ((88.36 + (13.4 * obj.weight) + (4.8 * obj
                    .height) + (5.7 *
                    obj.age)) * obj.k).toFixed(0);
            } else {
                return ((447.6 + (9.2 * obj.weight) + (3.1 * obj
                    .height) + (4.3 *
                    obj.age)) * obj.k).toFixed(0);
            }
        } else return 0;
    }


    sex.addEventListener('click', (
        e) => { // прослушивание на кнопки ПОЛА
        setGreen(sexs, e);
        obj.sex = e.target.id;
        result.innerHTML = calc();
    })

    function setGreen(cls, ev) {
        cls.forEach(item => {
            if (ev.target == item) {
                ev.target.classList.add(
                    'calculating__choose-item_active'

                );

            } else {
                item.classList.remove(
                    'calculating__choose-item_active'
                );
            }
        });
    }
    activeButton.addEventListener('click', (e) => {
        setGreen(buttnsActivity, e);

        obj.k = +e.target.getAttribute('data-ration')
        result.innerHTML = calc()



    })
    const inps = document.querySelectorAll(
        '.calculating__choose_medium input');
    inps.forEach(inp => {

        inp.addEventListener('input', (e) => {
            // console.log(e.target.value.replace(/\D/ig, ''))
            e.target.value = +e.target.value.replace(
                /\D/ig, '')
            obj[e.target.id] = +e.target.value;

            result.innerHTML = calc()
        })
    })

    result.innerHTML = calc();
});
