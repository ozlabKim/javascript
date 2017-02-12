// 대상선택(수도꼭지) - 특정시점(이벤트) - 기능수행(물이 나온다)

/*
document.getElementById('box3').onclick = function () {
    alert('준비중입니다.')
}
*/

/* ie8에서 동작하지 않는다
document.getElementById('box3').addEventListener('click',function (){
    alert('준비중입니다');
});
*/

$('#box3').on('click',function () {
   alert('준비중입니다.....');
});


function popup() {
    alert('준비중입니다');
}



// 자바스크립트 문법

// 변수와 자료형

// 자료형 > data

/*

    숫자 - 1, 10, 100 ( integer > int )
    문자 = "1", "사과", "과일", '바나나' ( string > str )
    불리언 - true(참,0), false(거짓,1) (boolean)

    널 - null ( 비어있다 )
    미정의 - undefined

    객체 - object (정보)
    배열 - array (순서)
    함수 - function (기능)

 */


// 변수

// 정보를 담을 수 있는 하나의 공간 ( 메모리상에 데이터 적재 하는 기능 )

var a = 10; // 오른쪽에 내용을 왼쪽에 담는다.
var doc = document;
var box_4 = doc.querySelector('.box4')

box_4.addEventListener('click', function(){
   alert(a)
});


// 대입
var number = 100; // es5
// let num = 200; // es6

var number = 200;
var number2 = 400;
var number3 = "300";
var plus = number + number2;

// console.log() 내 pc에 기록하는 기능
console.log(plus)
console.log(number2)
console.log(number3 + 100)

// 숫자는 산술연산이 가능하다 (+-*), 하지만 문자는 +만 사용이 가능하다
// 여기서 말하는 문자와 +는 산술연산의 결과가 아니라 "문자열 붙이기 기능으로 실행한다

console.log(typeof number3);

var c = 5;
console.log('콘솔에 적힌 숫자는 ' + c + ' + 100')


// = 대입 == 같다 === 정말 갑다

var dog = "개";
var p = 10;
var o = '10';

console.log(dog == p)
console.log(o === p)

console.log(typeof dog == typeof o)
console.log(o !== p)

var j ;

console.log(j)

// 태그를 컨트롤 해서 결과를 만드는 기능
// DOM(document) 컨트

// none jquery
doc.querySelector('.plus').addEventListener('click',function () {
    var first = doc.querySelector('.input1').value;
    var second = doc.querySelector('.input2').value;

    var total = Number(first) + Number(second); // 문자로 인식하는것을 숫자로 인식하게

    doc.querySelector('.result').innerHTML = total;
});

// jquery
$('.minus').on('click',function () {
    var $first = $('.num1 input').val();
    var $second = $('.num2 input').val();

    var $total = $first - $second; // 문자로 인식하는것을 숫자로 인식하게

    $('.result').text($total)
});

