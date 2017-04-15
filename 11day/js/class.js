// 클래스
// 3가지 클래스 사용방법 (es5)
// 1가지 사용방법 (es6)

// 1.리터널 방식 (보이는 그대로 구현한다.)
// 함수 > 기능정의
// 클래스 > 함수모 > 모듈
// 클래스 > 재활

var doc = document;
var box = doc.getElementById('box');
var nemo = doc.getElementById('nemo');

var Animation = { // 붕어빵 틀 > 인스턴스

    nowX : 0, // 멤버변수
    nowY : 0, // 멤버변수
    move : null,
    init : function (width,height) { //

        var endX = Math.floor(Math.random() * width) + 1;
        var endY = Math.floor(Math.random() * height) + 1;

        nemo.style.left = endX + 'px';
        nemo.style.top = endY + 'px';

        Animation.nowX = endX;
        Animation.nowY = endY;

    }, // 메소드

    top : function () {
        clearInterval(Animation.move);

        Animation.move = setInterval(function () {

            if (Animation.nowY <= 0) {
                clearInterval(Animation.move);
                return;
            }

            Animation.nowY = Animation.nowY - 1;
            nemo.style.top = Animation.nowY + 'px'

        },5)

    },

}


// 실행부분
Animation.init(550,450);
var topBtn = doc.getElementById('top');

topBtn.addEventListener('click', function () {
    Animation.top();
});