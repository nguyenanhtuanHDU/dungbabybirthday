const day = document.querySelector('.countdown_day');
const hour = document.querySelector('.countdown_hour');
const minute = document.querySelector('.countdown_minutes');
const second = document.querySelector('.countdown_second');

//Sat Jul 02 2022 15:17:09 GMT+0700 (Giờ Đông Dương)

//Sat Jul 10 2022 15:17:09 GMT+0700 (Giờ Đông Dương)


function countDown(date){
    let now = new Date();
    let startDay = now.getTime();
    let endDay = (new Date(date)).getTime();

    let timeRemaining = parseInt((endDay - startDay) / 1000);

    // 1 day = 86400 second
    // 1 hour = 3600 second

    if(timeRemaining >= 86400){
        day.textContent = parseInt(timeRemaining / 86400).toString()
    }
    let resFloatDay = timeRemaining / 86400
    if((timeRemaining - 86400 * parseInt(resFloatDay))  >= 3600){
        hour.textContent = parseInt((timeRemaining - 86400 * parseInt(resFloatDay)) / 3600).toString() 
    }
    let resFloatHour = ((timeRemaining - 86400 * parseInt(resFloatDay))) / 3600;

    if(resFloatHour * 3600 - parseInt(resFloatHour) * 3600 >= 60){
        minute.textContent = parseInt((resFloatHour * 3600 - parseInt(resFloatHour) * 3600) / 60)
    }
    let resFloatMinute = (resFloatHour * 3600 - parseInt(resFloatHour) * 3600) / 60


    if(resFloatMinute * 60 - (parseInt(resFloatMinute) * 60) < 60){
        second.textContent = (resFloatMinute * 60 - (parseInt(resFloatMinute) * 60)).toString()
    }
}
setInterval(function(){
    countDown('Sep 16 2022 00:00:00 GMT+0700 (Giờ Đông Dương)')
}, 1)



