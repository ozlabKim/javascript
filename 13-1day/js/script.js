// 기능 - 절차지향 프로그래밍
var doc = document;
var poster = doc.querySelector('.container').getElementsByTagName('img');
var posterLength = poster.length;


function horizontal() {
    for (var i = 0; i < posterLength; i++) {
        poster[i].style.top = 0 + 'px';
        poster[i].style.left = (i * 200) + 'px';
    }
}

function vaertical() {
    for (var i = 0; i < posterLength; i++) {
        poster[i].style.top = (i * 270) + 'px';
        poster[i].style.left = 0 + 'px';
    }
}

function random() {
    for (var i = 0; i < posterLength; i++) {
        poster[i].style.top = Math.floor(Math.random() * 300) + 'px';
        poster[i].style.left = Math.floor(Math.random() * 200) + 'px';
    }
}

function grid() {
    for (var i = 0; i < posterLength; i++) {

        var count = 3;

        var x = (i % count) * 200;
        var y = parseInt(i / count) * 270;

        poster[i].style.top = y + 'px';
        poster[i].style.left = x + 'px';
    }
}

$(document).ready(function () {
    $('#horizontal').on('click', horizontal);
    $('#vaertical').on('click', vaertical);
    $('#random').on('click', random);
    $('#grid').on('click', grid);
});


// 객체지향 프로그램

/*

 1. 추상화
 2. 캡슐화
 3. 상속

*/

// 다형성 : 여러가지의 수를 가지고 있는 기능

/* 미완성
Poster.prototype.show = function () {
 align.align(this.selector);
}

var horizontal = {
    align : function (img) {
        for (var i = 0; i < img.length; i++) {
            img[i].style.top = 0 + 'px';
            img[i].style.left = (i * 200) + 'px';
        }
    }
}

var poster = new Poster('img');

$(document).ready(function () {

    $('#horizontal').on('click',function () {
        poster.show(horizontal);
    })
})
*/


// se6 문법
// ECMA2015 javascript -> 표준
// 비동기 동기 -> 콜백


// let , const
// es5
function a(num) {
    return num + num;
}

console.log(a(100));

var c = new a();

// se6
var b = (num) => num + num;// 에로우 펑션 화살표

console.log(b(200));

// class

class Polygon {

    // 생성자 초기 인스턴스화 될때 처음 초기화 실행되는 부분 - 특수메소드
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.sumMethod();
    }

    sumMethod() {
        return this.width * this.height;
    }
}

var polygon = new Polygon(200, 200);

// console.log(polygon.area);

class Name {

    say() {
        return 'My name is Kim';
    }
}

class Admin extends Name {

    talk() {
        return '[Administrator]' + this.say();
    }
}

var admin = new Admin();

console.log(admin.talk());


// 디자인 패턴
// 패턴 -> 정리(개발 환경의 규칙을 패턴화 시킨다.)
// MVC

// 생글톤 패턴, 안티 패턴, 모듈 패턴, 프라미스 패턴

// 모듈패턴, 이벤트 기준, 클래스


// 모듈
var PosterAlign = (function($) {

    // 가로 정렬 기능
    var horizontal = function () {
        console.log('가로정렬 실행');
    };

    var vaertical = function () {
        console.log('세로정렬 실행');
    };

    var random = function () {
        console.log('랜덤정렬 실행');
    };

    var grid = function () {
        console.log('그리정렬 실행');
    };

    return {

        init : function () {
            // 가로정렬 버튼튼
            $('#horizontal').on('click.horizontal',horizontal);
            $('#vaertical').on('click.vaertical',vaertical);
            $('#random').on('click.random',random);
            $('#grid').on('click.grid',grid);
        }

    }

})(jQuery);

$(document).ready(function () {
    PosterAlign.init();
});



// 비동기 -> 동기

let MainController = function () {

    let num = 10;

    let time = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('타임아웃');
                resolve();
            },3000);
        });
    }


    let sum = () => {
        return new Promise(function (resolve, reject) {
            console.log(num);
        });
    }

    return {

        sumResult : () => sum(),
        timeOut : () => time(),
        timeToSum : () => {
            time().then(()=>sum());
        }

    }
};

let main = MainController();

main.timeToSum();
// main.timeOut();
// main.sumResult();



































