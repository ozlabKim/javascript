//

/*  var a = {

    b : 멤버변수
    c : function(){메소드)

*/

// 자바스크립트는 기본적으로 키와 벨류의 개념으로 사용을 합니다.
// 객체
// this
// 자바스크립트에서 this는 최초 window를 가르킨다.

var number = 10;

// console.log(this);
// console.log(this.number);
// console.log(window.number);

function func () {

    this.number = 20;

    // console.log(this);
    // console.log(this.number);
    // console.log(window.number);

}

var obj = new func();

// obj();

// func();

// this는 자기 자신 들어가 있는 "객체" 기준으로 자기 자신을 선택한다.

// 클래스 선언 방식
// 객체 형태 방식


// 함수
var num1 = 10;

function aa (op) {
    this.num1 = op;
}

aa(30);

console.log(num1); // num == 30

//
var num2 = 10;

function bb (op) {
    this.num2 = op;
}
//bb(20);
// new 연산자 -> 함수가 객체로 변환되서 리턴 됩니다.
var cc = new bb(20);

console.log(num2);


// 클래스

// 리터널 방식

// 함수방식
// 함수명 가장 첫번째 알파벳이 대문자면 클래스라고 부른다.
// 기능이 바뀌는게 아니라 역할이 바뀐다.
function FrontendDevelop(smart) { //클래스

    this.apple = smart; // 멤버변수
    this.phone = function () {
        console.log('새로운 레드' + this.apple + '이 나왔습니다.')
    }; // 메소드 기능 단위
}

var samsung = new FrontendDevelop('갤럭시'); /// 인스턴스
var apple = new FrontendDevelop('아이폰'); // 인스턴스

samsung.phone();
apple.phone();


// 프로토타입 방식
// 객체지향 프로그래밍
// JAVA

function Color() {

    this.banana = '노란색';
    this.grape = '보라색';

}

Color.prototype.friut = function () {

    console.log('과일의 색상은 ' + this.banana + '입니다.')

};

var color = new Color();

color.friut();



// 객체지향 프로그래밍
// 객체

// 사람도 동물이다. -> 생각차이
// 동물 <- 객체

/*

    1. 추상화
    2. 캡슐화
    3. 상속
    4. 다형성
    5. 합성

*/

// 절차지향 vs 객체지향
// 순서대로 나열하는 방식
// 객체 기준으로 가지고 분류를 통해서 기능의 다누이를 만든다.

// 1. 추상화
// 멤버변수와 메소드를 나눈다.
// TV

/*

    // 멤버변수
    해상도크기 // 변경
    모델명 // 변경
    제조사 // 불변

    ========================

    // 메소드
    전원(); // 기본적
    채널();
    볼륨();

    ========================

    // 고유기능 = 메소드
    타임머신();
    APP();

*/

// 위 추상화로 인한 결과물을 클래스로 구현한다.
// 캡슐화, 상속, 다형성




















































