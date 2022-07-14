const dayText = document.querySelector('.countdown_day');
const hourText = document.querySelector('.countdown_hour');
const minuteText = document.querySelector('.countdown_minutes');
const secondText = document.querySelector('.countdown_second');
const countdownSlider = document.querySelector('.countdown_slider');
const coudown_Item = document.querySelectorAll('.coudown__item');
const container = document.querySelector('.container')

const linearColor = [
    '#ec008c',
    '#fc6767',
    '#1488CC',
    '#2B32B2',
    '#00467F',
    '#A5CC82', 
    '#076585',
    '#fff',
    '#9796f0',
    '#fbc7d4',
    '#acb6e5',
    '#86fde8',
    '#FFE000',
    '#799F0C',
    '#00416A',
    '#ffe259',
    '#ffa751'
    ,'#799F0C',
    '#ACBB78',
    '#5433FF',
    '#A5FECB',
    '#20BDFF',
    '#ee9ca7',
    '#ffdde1',
    '#6dd5ed',
    '#2193b0'
]
const heartTemplate = `      
<div class="heart">
    <i class="fa-solid fa-heart"></i>
</div>`

function countDown(date){
    let now = new Date();
    let startDay = now.getTime();
    let endDay = (new Date(date)).getTime();
    let timeRemaining = parseInt((endDay - startDay) / 1000);
    let day = parseInt(timeRemaining / 86400)
    let hour = parseInt(timeRemaining % 86400 / 3600)
    let minute = parseInt(timeRemaining % 86400 % 3600 / 60)
    let second = timeRemaining % 86400 % 3600 % 60

    dayText.textContent = `0${day}`.slice(-2)
    hourText.textContent = `0${hour}`.slice(-2)
    minuteText.textContent = `0${minute}`.slice(-2)
    secondText.textContent = `0${second}`.slice(-2)
}
setInterval(function(){
    countDown('Sep 16 2022 00:00:00 GMT+0700 (Giờ Đông Dương)')
}, 1000)

let spaceScroll = 0
setInterval(function(){
    spaceScroll += coudown_Item[0].offsetWidth
    if(spaceScroll === coudown_Item[0].offsetWidth * coudown_Item.length) spaceScroll = 0
    countdownSlider.scrollLeft = spaceScroll
}, 3000)

let index;

document.addEventListener('click', function(e){
    index = Math.floor(Math.random() * linearColor.length)
    document.body.insertAdjacentHTML('afterbegin', heartTemplate)
    const heart = document.querySelector('.heart')
    heart.style.color = `${linearColor[index]}`
    heart.style.left = `${e.pageX}px`
    heart.style.top = `${e.pageY}px`
    setTimeout(function(){
        document.body.removeChild(heart)
    }, 2000)
})