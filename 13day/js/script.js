// 세탁기

// 1. 추상화
/*
function Drum() {
    
    // 멤버변수 초기값
    this.company = '제조사';
    this.model = '모델명';
    this.size = '용량';
    
    // 메소드 기능
    this.power_on = function () { console.log('전원켜기')};
    this.power_off = function () { console.log('전원끄기')};
    this.power_pause = function () { console.log('일시정지')};
    this.talsoo = function () { console.log('탈수시작')};

    // 메소드 추가 기능
    this.dry = function () { console.log('건조시작')};
    this.ion = function () { console.log('살균시작')};

}

var kim = new Drum(); // 인스턴스

console.log(kim.company);


$(document).ready(function () {

    $('.on').on('click', function () {
        kim.power_on();
    });

    $('.off').on('click', function () {
        kim.power_off();
    });

});
*/

// 2. 캡슐화
/*
function Drum() {

    // 멤버변수 초기값
    var _company = 'LG'; // private
    this.model = '모델명'; // public
    this.size = '용량';

    // 제조사 확인 기능
    this.getCompany = function () {return _company};


    // 메소드 기능
    this.power_on = function () { console.log('전원켜기')};
    this.power_off = function () { console.log('전원끄기')};
    this.power_pause = function () { console.log('일시정지')};
    this.talsoo = function () { console.log('탈수시작')};

    // 메소드 추가 기능
    this.dry = function () { console.log('건조시작')};
    this.ion = function () { console.log('살균시작')};

}

var won = new Drum();

console.log(won.getCompany());
*/


// 3. 상속
// css 상속 부모의 스타일 자식에게 전달되는 기능
function Drum() {

    // 멤버변수 초기값
    this.company = '제조사';
    this.model = '모델명';
    this.size = '용량';

    // 메소드 기능
    this.power_on = function () { console.log('전원켜기');};
    this.power_off = function () { console.log('전원끄기');};
    this.power_pause = function () { console.log('일시정지');};
    this.talsoo = function () { console.log('탈수시작');};

}

function Sin() {

    this.dry = function () { console.log('건조기능');}

}

// 상속
Sin.prototype = new Drum();

// 인스턴스
var oh = new Sin();

console.log(oh.model);


// 4. 다형성
// 다형성이 없다
// 오버라이드
// 한가지에 기능을 가지고 다른 동작을 하는것.



























