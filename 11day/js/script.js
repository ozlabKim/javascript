// 클래스 > 모듈

// 스코프체인
// 부모와 지식의 관계 연결 시키는 구조

var a = 10;

function outFunc() {

    var b = 20;

    function inFunc() {
        console.log(a+b);
    }
    inFunc();
}

// outFunc();


// 클로져

/*
*
* 1. function > 클로져 : 내부의 변수들이 private(!=public)
* 2. 클로져가 생성되면 내부 변수들은 별도로 유지 되면서 상태값을 가지고 있는다.
*
* */




function open(x) {

    var num = 10;

    function inner(y) {
        num++;
        console.log(x + y + num);
    }

    inner(20);
}

open(5);
open(5);
open(5);


// 클로져 - 갱신되면 안됨, 누적되게 처리할때

function close(x) {

    var num = 10;

    return function cFunc(y) {
        num++;
        console.log(x + y + num)
    }
}

var sum = close(5);

sum(20);
sum(20);
sum(20);


// 클래스와 모듈

// 애니메이션 박스 클래스로 변환 모듈화 시킨다.
// 1. 리터널 2. 함수 3. 프로토타입 > 4. es6 class

// 그냥 기능 구현 ( 절차지향 방식 > 객체지향 방식
// 가급적 전역변수나 전역함수는 사용하지 않는게 실수를 줄일 수 있다.

var doc = document;
var box = doc.getElementById('box');
var nemo = doc.getElementById('nemo');

// 1. 상자의 위치가 랜덤으로 위치하게 만들어 주자.
function init() {

    // 랜덤 숫자 (난수 발생)

    var endX = Math.floor(Math.random() * 550) + 1;
    var endY = Math.floor(Math.random() * 450) + 1;

    nemo.style.left = endX + 'px';
    nemo.style.top = endY + 'px';

    nowX = endX;
    nowY = endY;
}

init();


var bottomBtn = doc.getElementById('bottom');

bottomBtn.addEventListener('click',function () {

    clearInterval(move);

    var move = setInterval(function () {

        if (nowY >= 450) {
            clearInterval(move);
            return;
        }

        nowY = nowY + 1;
        nemo.style.top = nowY + 'px'

    },5)
    
});

var topBtn = doc.getElementById('top');

topBtn.addEventListener('click',function () {

    clearInterval(move);

    var move = setInterval(function () {

        if (nowY <= 0) {
            clearInterval(move);
            return;
        }

        nowY = nowY - 1;
        nemo.style.top = nowY + 'px'

    },5)

});






































