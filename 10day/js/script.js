// 지난과정

/*
*
* es5
* 자바스크립트 문법
* 변수 (var)
* 조건문 (if, switch)
* 반복문 (fo, while, do while)
* 함수 (function(){})
* 객체 {} - 순서가 없는 데이터 모음
* 배열 [] - 순서가 존재하는 데이터의 모음
* 매개변수 지역변수 전역변수
* 애니메이션 - setInterval(), clearInterval();
* DOM 컨트롤선택자를 중심으로 변경, 삭제, 추가)
*
* 앞으로 우리가 배워야할 자바스크립트
* 개발자
* 함수
* 클로저, 중첩함수, 콜백함수
* 클래스(class)
* 모듈
* 객체지향 프로그래밍
* 상속
* React.js Node.js
* jQuery
* 프로젝트
*
* */


// 전역 vs 지역
// 전역 > 전지역 > global
// 지역 > 한정된 공강 > scope


// 전역
$(document).ready(function () {
    // 진역
});

// 스코프 (영역) scope

/*
var scope1 = 10;
var scope2 = 50;

function name() {

    // 스코프(scope) // 지역
    // var scope1 = 30;
    // console.log(scope1);

    // 호이스트 = 우선권

    console.log(scope2);
    var scope2 = 100;

};

name();
*/

// es6 (ECMA2015) > es7
// let, const (상수, 변하지 않는 수) < 변수

let es1 = 50;

function func() {

    let es1 = 100;
    console.log(es1);

}

// func();

const doc = document;
// const es2 = 100;
// es2 = 50;
// console.log(es2);

function loop() {
    for (let i=0; i<10; i++) {
        console.log(i)
    }
    console.log('마지막 변수 i의 값은 ' + i + '이다.');
}

// loop();

// let, const 를 가급적 사용한다.

// ie < 10
// es6 > 후처리기(es6 > es5) : webpack,grunt,grub > 번들파일(bundle.js) > 서비스이용


// 콜백
// 비동기 처리 > 동기

let box1 = doc.querySelector('.box1');
let box2 = doc.querySelector('.box2');
let box3 = doc.querySelector('.box3');
let btn = doc.getElementById('startMove');

btn.addEventListener('click',function () {

    box1Move(box2Move);

});

function box1Move(callback) {
    var move = 0;
    var ani = setInterval(function () {
        move = move + 1;
        box1.style.left = move + 'px';

        if ( move > 200){
            clearInterval(ani);
            callback();
            return;
        }
    }, 5);
};

function box2Move() {
    var move = 0;
    var ani = setInterval(function () {
        move = move + 1;
        box2.style.left = move + 'px';

        if ( move > 200){
            clearInterval(ani);
            box3Move();
            return;
        }
    }, 5);
};

function box3Move() {
    var move = 0;
    var ani = setInterval(function () {
        move = move + 1;
        box3.style.left = move + 'px';

        if ( move > 200){
            clearInterval(ani);
            return;
        }
    }, 5);
};

// 제이쿼리 동기 방식
/*
$("#startMove").on('click', function () {
   $(".box1").animate({left : 200}, 2000, function () {
       $(".box2").animate({left : 200}, 2000, function () {
           $(".box3").animate({left : 200}, 2000);
       });
   });
});
*/

/*
*
* 스코프 var let const
* 콜백 함수 (콜백 지옥, 동기 처리 하기 위한 문제점)
*
* */






























