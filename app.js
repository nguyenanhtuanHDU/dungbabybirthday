const dayText = document.querySelector('.countdown_day');
const hourText = document.querySelector('.countdown_hour');
const minuteText = document.querySelector('.countdown_minutes');
const secondText = document.querySelector('.countdown_second');
const count = document.querySelector('.count')
const countdownSlider = document.querySelector('.countdown_slider');
const coudown_Item = document.querySelectorAll('.coudown__item');
const container = document.querySelector('.container')
const sound = document.querySelector('.sound')
const audio = document.querySelector('.audio')
const backPlay = document.querySelector('.back_play')
const backPlayIcon = document.querySelector('.back_play i')
const backNext = document.querySelector('.back_next')
const backHeading = document.querySelector('.back_heading')
const backName = document.querySelector('.back_name')
const backImg = document.querySelector('.back_img')
const back_Img = document.querySelector('.back__img')
const backPrev = document.querySelector('.back_prev')
const backRange = document.querySelector('.back_range input')
const backList = document.querySelector('.back_list')

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
    sound.play()
    setTimeout(function(){
        document.body.removeChild(heart)
    }, 2000)
})

// let num = 0;
// count.addEventListener('click', function(e){
//     if(num < 2){
//         num += 1
//         if(num === 2){
//             count.classList.toggle('active')
//             num = 0
//         }
//     }
// })

const listMusic = [
    {
        name: 'Anh Đánh Rơi Người Yêu Này',
        author: 'Andiez ft. AMEE',
        link: 'Anh Đánh Rơi Người Yêu Này.mp3',
        img: 'anh_danh_roi_nguoi_yeu_nay.jpg'
    },
    {
        name: 'Bồ Em',
        author: 'Dính',
        link: 'Bồ Em.mp3',
        img: 'bo_em.jpg'
    },
    {
        name: 'Cứ Yêu Đi',
        author: 'Đức Phúc',
        link: 'Cứ Yêu Đi.mp3',
        img: 'cu_yeu_di.jpg'
    },
    {
        name: 'Em Là Hoàng Hôn',
        author: 'Vang x Cloud 5',
        link: 'Em Là Hoàng Hôn.mp3',
        img: 'em_la_hoang_hon.jpg'
    },
    {
        name: 'Em Thích',
        author: 'SEAN X',
        link: 'Em Thích.mp3',
        img: 'em_thich.jpg'
    },
    {
        name: 'Muốn Được Cùng Em',
        author: 'FREAKY x CM1X',
        link: 'Muốn Được Cùng Em.mp3',
        img: 'muon_duoc_cung_em.jpg'
    },
    {
        name: 'Ngày Đầu Tiên',
        author: 'Đức Phúc',
        link: 'Ngày Đầu Tiên.mp3',
        img: 'ngay_dau_tien.jpg'
    }
]

audio.volume = 0.4;
let playing = true;
let index2 = 0;
// if(index2 === 0){
//     backHeading.textContent = `${listMusic[0].author}`
//     backName.textContent = `${listMusic[0].name}`
//     backImg.setAttribute('src', `./image/music/${listMusic[0].img}`)
// }

backPlay.addEventListener('click', playMusic)

function playMusic(){
    if(playing === true){
        audio.play()
        backPlayIcon.classList.add('fa-pause')
        backPlayIcon.classList.remove('fa-circle-play')
        backImg.classList.add('active')
        playing = false
    
    }else if(playing === false){
        audio.pause()
        backPlayIcon.classList.remove('fa-pause')
        backImg.classList.remove('active')
        backPlayIcon.classList.add('fa-circle-play')
    
        playing = true
    }
}


backNext.addEventListener('click', function(e){
    index2 += 1;
    if(index2 === listMusic.length){
        index2 = 0;
    }
    audio.setAttribute('src', `./audio/mp3/${listMusic[index2].link}`)
    backPlayIcon.classList.add('fa-pause')
    backPlayIcon.classList.remove('fa-circle-play')
    backHeading.textContent = `${listMusic[index2].author}`
    backName.textContent = `${listMusic[index2].name}`
    back_Img.setAttribute('src', `./image/music/${listMusic[index2].img}`)
    playing = true
    playMusic()
})

backPrev.addEventListener('click', function(e){
    index2 -= 1;
    if(index2 === -1){
        index2 = listMusic.length - 1
    }
    audio.setAttribute('src', `./audio/mp3/${listMusic[index2].link}`)
    backPlayIcon.classList.add('fa-pause')
    backPlayIcon.classList.remove('fa-circle-play')
    backHeading.textContent = `${listMusic[index2].author}`
    backName.textContent = `${listMusic[index2].name}`
    back_Img.setAttribute('src', `./image/music/${listMusic[index2].img}`)
    playing = true
    playMusic()
})

audio.addEventListener('ended', function(e){
    index2 += 1;
    if(index2 === listMusic.length){
        index2 = 0;
    }
    audio.setAttribute('src', `./audio/mp3/${listMusic[index2].link}`)
    backPlayIcon.classList.add('fa-pause')
    backPlayIcon.classList.remove('fa-circle-play')
    backHeading.textContent = `${listMusic[index2].author}`
    backName.textContent = `${listMusic[index2].name}`
    back_Img.setAttribute('src', `./image/music/${listMusic[index2].img}`)
    playing = true
    playMusic()
})

backRange.addEventListener('change', function(e){
    audio.currentTime = backRange.value
})

function displayTimer() {
    const { duration, currentTime } = audio;
    backRange.max = duration;
    backRange.value = currentTime;
}
setInterval(displayTimer, 500)

listMusic.forEach(item => {

    const backItem = document.createElement('div')
    backItem.classList.add('back_item')
    backItem.dataset.src = `${item.link}`
    backItem.dataset.name = `${item.name}`
    backItem.dataset.author = `${item.author}`
    backItem.dataset.img = `${item.img}`
    const backItemImg = document.createElement('img')
    backItemImg.classList.add('back_item_img')
    backItemImg.setAttribute('src', `./image/music/${item.img}`)
    backItem.appendChild(backItemImg)
    const backItemContent = document.createElement('div')
    backItemContent.classList.add('back_item_content')
    backItem.appendChild(backItemContent)
    const backContentName = document.createElement('h3')
    backContentName.classList.add('back_content_name')
    backContentName.textContent = `${item.name}`
    backItemContent.appendChild(backContentName)
    const backContentAuthor = document.createElement('div')
    backContentAuthor.classList.add('back_content_author')
    backContentAuthor.textContent = `${item.author}`
    backItemContent.appendChild(backContentAuthor)

    backList.appendChild(backItem)
})
const backItem = document.querySelectorAll('.back_item')

backList.addEventListener('click', function(e){
    const clicked = e.target
    console.log(clicked)
    if(clicked.nodeName === 'SECTION') {
        return;
    }
    [...backItem].forEach(item => item.classList.remove('active'))
    clicked.classList.add('active')
    audio.setAttribute('src', `./audio/mp3/${clicked.dataset.src}`)
    backHeading.textContent = `${clicked.dataset.author}}`
    backName.textContent = `${clicked.dataset.name}`
    back_Img.setAttribute('src', `./image/music/${clicked.dataset.img}`)
    console.log(clicked.offsetTop)
    backList.scroll(0, clicked.offsetTop - clicked.offsetHeight)
    playing = true
    playMusic()
})

backList.addEventListener('scroll', function(e){
    console.log(this.scrollTop)
})


