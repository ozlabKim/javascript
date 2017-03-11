var doc = document;

// 이벤트
var eventbox = doc.querySelector('.event1'); // 선택자 (태그)


/*
    // eventbox.addEventListener('click', function () {
    // eventbox.addEventListener('mousedown', function () {
    // eventbox.addEventListener('mouseover', function () {
    window.addEventListener('keydown', function (event) {

        // console.log(event.keycode);
        if (event.keyCode == 38) {
            eventbox.classList.add('up');
        }

    });

    // eventbox.addEventListener('mouseup', function () {
    // eventbox.addEventListener('mouseout', function () {
    window.addEventListener('keyup', function (e) {

        if (event.keyCode == 40) {
            eventbox.classList.remove('up');
        }

    });
*/


// window

/*
window.addEventListener('scroll', function () {

    console.log(document.body.scrollTop);

    var position = doc.body.scrollTop;

    if (position > 300){
        eventbox.classList.add('color');
    }

    if (position > 600){
        eventbox.classList.add('up');
    }

});
*/


/*
window.addEventListener('resize', function () {

    console.log(document.body.clientWidth);
    eventbox.classList.add('color');

});
*/


$(window).on('resize', function () {

    console.log($(window).width());

    if ($(window).width() < 600) {
        $('.event1').addClass('nav');
    } else {
        $('.event1').removeClass('nav');
    }
});


// 애니메이션 구현하기
/*
$('.box').animate({
    'left' : '200px',
    'width' : '300px'
});
*/


// 자마스크립트로 애니메이션
// setInterval (반복 가능을 하는 함수)
// setInterval(function(){},300);
// setInterval(동작,시간);
// 매 '시간' 마다 '동작'을 수행하는 기능
// 1000ms -> 1초

// var num = 1;
//
// setInterval(function () {
//     console.log(num + '번째 실행');
//     num++;
// }, 3000);


// 변수 위치 (전역, 지역)
var num = 1;
var startBtn = doc.getElementById('start');
var stopBtn = doc.getElementById('stop');
var aniBox = doc.querySelector('.box');

// 전역변수
var motion;
var limit = 200;

startBtn.addEventListener('click', function (){

    // 지역변수
    motion = setInterval(function () {

        if ( num > limit ) {
            clearInterval(motion);
        }

        aniBox.style.left = num + 'px';
        num++;
    }, 0.5);

});

stopBtn.addEventListener('click', function(){
   clearInterval(motion);
   aniBox.style.left = '0px';
   num = 1;
});

$('.box').on('click', function () {
    $('.box').fadeOut();
});
































