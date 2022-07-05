const dayText = document.querySelector('.countdown_day');
const hourText = document.querySelector('.countdown_hour');
const minuteText = document.querySelector('.countdown_minutes');
const secondText = document.querySelector('.countdown_second');
const countdownSlider = document.querySelector('.countdown_slider');
const coudown_Item = document.querySelectorAll('.coudown__item');

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