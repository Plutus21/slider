const city = document.getElementById('city');
const position = document.getElementById('position');
const area = document.getElementById('area');
const time = document.getElementById('time');
const cost = document.getElementById('cost');
const form = document.getElementById('radio-form');
const sliderImg = document.getElementById('slider-img');

const oneCheck = document.getElementById('one-check');
const twoCheck = document.getElementById('two-check');
const threeCheck = document.getElementById('three-check');

const firstSlide = document.getElementById('first-slide');
const secondSlide = document.getElementById('second-slide');
const lastSlide = document.getElementById('last-slide');

const jsonString = `{
    "list": [
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
}`

const data = JSON.parse(jsonString);

const list = data.list;

let navButtonItems = document.querySelectorAll('.nav-slider-button');
let radioButtonItems = document.querySelectorAll('.custom-radio');

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
        navButtonItems[0].classList.add('active');
        navButtonItems[1].classList.remove('active');
        navButtonItems[2].classList.remove('active');
    } else if (index === 2) {
        navButtonItems[0].classList.remove('active');
        navButtonItems[1].classList.add('active');
        navButtonItems[2].classList.remove('active');
    } else if (index === 3) {
        navButtonItems[0].classList.remove('active');
        navButtonItems[1].classList.remove('active');
        navButtonItems[2].classList.add('active');
    }
}

let indexChange = 0

form.onchange = function (e) {
    if(e.target === oneCheck) {
        dataList(indexChange = 1);
        activeNavButton(indexChange = 1);
    } else if(e.target === twoCheck) {
        dataList(indexChange = 2);
        activeNavButton(indexChange = 2);
    } else if (e.target === threeCheck) {
        dataList(indexChange = 3);
        activeNavButton(indexChange = 3);
    }
};

firstSlide.addEventListener('click', () => {
    activeNavButton(indexChange = 1);
    dataList(indexChange = 1);
});

secondSlide.addEventListener('click', () => {
    activeNavButton(indexChange = 2);
    dataList(indexChange = 2);
});

lastSlide.addEventListener('click', () => {
    activeNavButton(indexChange = 3);
    dataList(indexChange = 3);
});

const leftSwipe = document.getElementById('left-swipe');
const rightSwipe = document.getElementById('right-swipe');

leftSwipe.addEventListener('click', () => {
    dataList(indexChange -1);
    activeNavButton(indexChange -1);
    if (indexChange > 2) {
        --indexChange;
    } else {
        indexChange = 4;
    }
});

rightSwipe.addEventListener('click', () => {
    dataList(indexChange +1);
    activeNavButton(indexChange +1);
    if (indexChange < 2) {
        indexChange++;
    } else {
        indexChange = 0;
    }
});


window.addEventListener('load', () => {
    activeNavButton(indexChange = 1);
    dataList(indexChange = 1);
});