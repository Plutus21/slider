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

const firstSlide = document.getElementById('first-slide')

const jsonString = `{
    "list": [
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
    }
    ]
}`

const data = JSON.parse(jsonString);

const list = data.list;

form.onchange = function (e) {
    if(e.target === twoCheck) {
        city.innerHTML = list[1].city;
        position.innerHTML = list[1].position;
        area.innerHTML = list[1].area;
        time.innerHTML = list[1].time;
        cost.innerHTML = list[1].cost;
        sliderImg.innerHTML = `<img src=${list[1].src} class="completed-projects__img"/>`;
    } else if(e.target === threeCheck) {
        city.innerHTML = list[2].city;
        position.innerHTML = list[2].position;
        area.innerHTML = list[2].area;
        time.innerHTML = list[2].time;
        cost.innerHTML = list[2].cost;
        sliderImg.innerHTML = `<img src=${list[2].src} class="completed-projects__img"/>`;
    } else if (e.target === oneCheck) {
        city.innerHTML = list[0].city;
        position.innerHTML = list[0].position;
        area.innerHTML = list[0].area;
        time.innerHTML = list[0].time;
        cost.innerHTML = list[0].cost;
        sliderImg.innerHTML = `<img src=${list[0].src} class="completed-projects__img"/>`;
    }
}
