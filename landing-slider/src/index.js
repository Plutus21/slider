const city = document.getElementById('city');
const position = document.getElementById('position');
const area = document.getElementById('area');
const time = document.getElementById('time');
const cost = document.getElementById('cost');
const sliderImg = document.getElementById('slider-img');

const oneCheck = document.getElementById('one-check');
const twoCheck = document.getElementById('two-check');
const threeCheck = document.getElementById('three-check');

const firstSlideNav = document.getElementById('first-slide__nav');
const secondSlideNav = document.getElementById('second-slide__nav');
const lastSlideNav = document.getElementById('last-slide__nav');

const list =[
    {
    "city": " ",
    "position": " ",
    "area": " ",
    "time": " ",
    "cost": " ",
    "src": " "
    },
    {
    "city": "Rostov-on-Don",
    "position": "LCD Admiral",
    "area": "81 m2",
    "time": "3.5 months",
    "cost": "Upon request",
    "src": "./images/slide1.jpg"
    },
    {
    "city": "Sochi",
    "position": "Thieves",
    "area": "105 m2",
    "time": "4 months",
    "cost": "Upon request",
    "src": "./images/slide2.jpg"
    },
    {
    "city": "Rostov-on-Don",
    "position": "Patriotic",
    "area": "93 m2",
    "time": "3 months",
    "cost": "Upon request",
    "src": "./images/slide3.jpg"
    },
    {
    "city": " ",
    "position": " ",
    "area": " ",
    "time": " ",
    "cost": " ",
    "src": " "
    }
]


let navButtonItems = document.querySelectorAll('.nav-slider-button');
let checkButtonItems = document.querySelectorAll('.button-check');

function dataList(index) {
    city.innerHTML = list[index].city;
    position.innerHTML = list[index].position;
    area.innerHTML = list[index].area;
    time.innerHTML = list[index].time;
    cost.innerHTML = list[index].cost;
    sliderImg.innerHTML = `<img src=${list[index].src} class="completed-projects__img"/>`;
}

function activeNavButton(index) {
    if (index === 1) {
        navButtonItems[0].classList.add('nav-slider-button__active');
        navButtonItems[1].classList.remove('nav-slider-button__active');
        navButtonItems[2].classList.remove('nav-slider-button__active');
    } else if (index === 2) {
        navButtonItems[0].classList.remove('nav-slider-button__active');
        navButtonItems[1].classList.add('nav-slider-button__active');
        navButtonItems[2].classList.remove('nav-slider-button__active');
    } else if (index === 3) {
        navButtonItems[0].classList.remove('nav-slider-button__active');
        navButtonItems[1].classList.remove('nav-slider-button__active');
        navButtonItems[2].classList.add('nav-slider-button__active');
    }
}

function activeCheckButton(index) {
    if (index === 1) {
        checkButtonItems[0].classList.add('button-check__active');
        checkButtonItems[1].classList.remove('button-check__active');
        checkButtonItems[2].classList.remove('button-check__active');
    } else if (index === 2) {
        checkButtonItems[0].classList.remove('button-check__active');
        checkButtonItems[1].classList.add('button-check__active');
        checkButtonItems[2].classList.remove('button-check__active');
    } else if (index === 3) {
        checkButtonItems[0].classList.remove('button-check__active');
        checkButtonItems[1].classList.remove('button-check__active');
        checkButtonItems[2].classList.add('button-check__active');
    }
}

let indexChange = 0;

firstSlideNav.addEventListener('click', () => {
    activeNavButton(indexChange = 1);
    dataList(indexChange = 1);
    activeCheckButton(indexChange = 1);

    dignityBlockOne.classList.add('dignity-block1');
    dignityBlockOne.classList.remove('dignity-block1__slider-two');
});

secondSlideNav.addEventListener('click', () => {
    activeNavButton(indexChange = 2);
    dataList(indexChange = 2);
    activeCheckButton(indexChange = 2);

    dignityBlockOne.classList.remove('dignity-block1');
    dignityBlockOne.classList.add('dignity-block1__slider-two');
});

lastSlideNav.addEventListener('click', () => {
    activeNavButton(indexChange = 3);
    dataList(indexChange = 3);
    activeCheckButton(indexChange = 3);

    dignityBlockOne.classList.add('dignity-block1');
    dignityBlockOne.classList.remove('dignity-block1__slider-two');
});

oneCheck.addEventListener('click', () => {
    activeNavButton(indexChange = 1);
    dataList(indexChange = 1);
    activeCheckButton(indexChange = 1);

    dignityBlockOne.classList.add('dignity-block1');
    dignityBlockOne.classList.remove('dignity-block1__slider-two');
});

twoCheck.addEventListener('click', () => {
    activeNavButton(indexChange = 2);
    dataList(indexChange = 2);
    activeCheckButton(indexChange = 2);

    dignityBlockOne.classList.remove('dignity-block1');
    dignityBlockOne.classList.add('dignity-block1__slider-two');
});

threeCheck.addEventListener('click', () => {
    activeNavButton(indexChange = 3);
    dataList(indexChange = 3);
    activeCheckButton(indexChange = 3);

    dignityBlockOne.classList.add('dignity-block1');
    dignityBlockOne.classList.remove('dignity-block1__slider-two');
});

let dignityBlockOne = document.getElementById('dignity-block-one');

function twoSliderClassChange() {
    if(indexChange === 2) {
        dignityBlockOne.classList.remove('dignity-block1');
        dignityBlockOne.classList.add('dignity-block1__slider-two');
    } else {
        dignityBlockOne.classList.add('dignity-block1');
        dignityBlockOne.classList.remove('dignity-block1__slider-two');
    }
}

const leftSwipe = document.getElementById('left-swipe');
const rightSwipe = document.getElementById('right-swipe');

leftSwipe.addEventListener('click', () => {
    if (indexChange > 1) {
        indexChange--;
    } else {
        indexChange = 3;
    }

    twoSliderClassChange();

    dataList(indexChange);
    activeNavButton(indexChange);
    activeCheckButton(indexChange);
});

rightSwipe.addEventListener('click', () => {
    if (indexChange < 3) {
        indexChange++;
    } else {
        indexChange = 1;
    }

    twoSliderClassChange();

    dataList(indexChange);
    activeNavButton(indexChange);
    activeCheckButton(indexChange);
});

window.addEventListener('load', () => {
    activeNavButton(indexChange = 1);
    dataList(indexChange = 1);
    activeCheckButton(indexChange = 1);
});
