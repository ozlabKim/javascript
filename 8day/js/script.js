// 자바스크립트로 슬라이드 기능을 만들자.
var doc = document;

// 변수에 대한 클로져
/*
var a = 1;
var plus =  function () {

    a++;

    if ( a > 5 ) {
        a = 1;
    }
    console.log(a);

};

doc.getElementById('prev').addEventListener('click',plus);
*/

// 슬라이드 만들기

var nextBtn = doc.getElementById('next'); // 선택자
var prevBtn = doc.getElementById('prev'); // 선택자
var item = doc.querySelector('.item'); // 이동할 대상
var dist = 0; // 이동한거리를 체크하고 있는 변수
var move = 700; // 움직여야 하는 거리를 알고 있는 변수
var max = 0; // 움직여야 하는 종료 시점
var count = 0; // 움직인 태그의 순서체코 (index)
var page = doc.getElementById('page').getElementsByTagName('div');

nextBtn.addEventListener('click',function () {

    if (count >= 4) {
        // 처음으로 돌아간다.

        var turn = setInterval(function () {

            dist = dist + 10;

            item.style.transform = 'translateX(' + dist + 'px)';

            if( dist >= 0 ) {
                clearInterval(turn);
                count = 0;
                page[0].classList.add('active');
                page[page.length - 1].classList.remove('active');
                max = 0;
                return;
            }
        },3);
    } else {
        // 오른쪽 실행된다.
        // 1. 오른쪽 2번째 이미지를 보여준다. (이동한다.);
        // item.style.transform = 'translateX(-700px)';

        max = max - move;

        var slider = setInterval(function(){

            dist = dist - 10;

            item.style.transform = 'translateX(' + dist + 'px)';

            if( dist <= max ) {
                clearInterval(slider);
                count++;
                page[count - 1].classList.remove('active');
                page[count].classList.add('active');
                console.log(count);
                return;
            }
        },5);
    }
});


var liTag = item.getElementsByTagName('li');


prevBtn.addEventListener('click',function () {

    if (count <= 0) {

        var last = -(move * (liTag.length - 1));

        var turn = setInterval(function () {

            dist = dist - 10;

            item.style.transform = 'translateX(' + dist + 'px)';

            if( dist <= last ) {
                clearInterval(turn);
                return;
            }

        },3);

    } else {
        max = max + move;

        var slider = setInterval(function(){

            dist = dist + 10;

            item.style.transform = 'translateX(' + dist + 'px)';

            if( dist >= max) {
                clearInterval(slider);
                count--;
                return;
            }
        },5);
    }
});
