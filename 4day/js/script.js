$(document).ready(function () {









});

// 함수

/*
    1. 함(상자)에 담는 경우의 수, 가지의 수
    2. 자주 사용되는 코드를 별도의 파일로 만들어서 필요할때 마다 재활용 할 수 있다.
    3. 코드를 개선하면 이를 사용하는 모든 코드들이 같이 개선된다.
    4. 코드 수정시 필요한 기능을 쉽고 빠르게 찾을수 있다.
    5. 필요한 기능만 사용하기 때문에 메모리 낭비를 줄일 수 있다.
*/


// if(){}
// switch(){}
// for(){}
// function(){}

// 자료형 > rkqt
// var a = 10;

console.log('안녕');


// function(동작을 위한 준비물) {동작(기능)에 대한 정의}

function name() {
    console.log('하이')
}

name(); // 함수를 사용하라는 명령어 (호출한다, call)



var aa = function () {
    console.log('일요일');
}

aa();


// 함수가 자체 실행
(function fc() {
    console.log('내일은 월요일')
})();


// 함수의 반환** (return)
// 파라미터 or 매개변수
function plus(num1,num2,num3 = 0.01){

    // var a = num1;
    // var b = num2;

    return (num1 + num2) * num3;
}

// console.log(plus(10, 50));
// console.log(plus(50, 520));
// console.log(plus(150, 50));


var point = [80, 95, 87, 43, 92, 100];

function avg(arr) {

    var total = 0;

    /*
    for(var i=0; i<arr.length; i++){
        // total = total + arr[i];
        total+=arr[i];
    }
    */

    for(i in arr) { // 배열의 순서만큼 자동으
        total+=arr[i];
    }

    var avg = total / arr.length;

    return avg.toFixed(2);
}


// console.log(avg(point));


// 매개변수
function sum() {

    var total = 0;

    for(i in arguments) {
        total+=arguments[i];
    }


    return total;
}

// console.log(sum(20,30,80,60));

// es5
// se6
// arrow function


function es5(a,b) {

    return a+b;

}

console.log(es5(30,30));


// () > {}

var es6 = (a,b) => a+b;

console.log(es6(10,10));


// quiz

// 두 수와 두 수사이에 있는 모든 정수를 더해서 리턴 하도록 함수를 완성하세요.
// a와 b가 같은 경우는 둘중 아무 수나 리턴 하세요.
// 예를들어 a가 3, b가 5이면 12를 리턴된다.

// a, b는 음수나 0, 양수일 수 있다 둘의 대소 관계는 정해지지 않는다.

/*
function adder(a,b) {

    var result = 0;
    var min = 0;
    var max = 0;

    if(a > b){
        max = a;
        min = b;
    } else if (a < b) {
        max = b;
        min = a;
    } else {
        return a; // return을 만나는 순간 함수를 종료
    }

    for(var i=max; i<=min; i++) {
        result += i;
    }

    return result;
}
*/

var adder = (a,b,sum=0) => {
    for(var i = Math.min(a,b); i <= Math.max(a,b); i++){
        sum+=i;
    }

    return sum;
}

console.log(adder(3,5));



//실습

$(document).ready(function () {

    var doc = document;
    function productSelect(ing,text) {
        var product = doc.querySelector('.product');
        var title = doc.querySelector('.title');

        product.style.backgroundPosition=ing+'px';
        title.innerHTML = text;
    }

    var apple = [
        {img: 0, text:'iPhone'},
        {img: -250, text:'iPod'},
        {img: -500, text:'iPad'},
        {img: -750, text:'iMax'},
    ];

    $('li').on('click', function () {

        // var index = $(this).index(); // 클릭한 태그 순서 return;
        var index = this.getAttribute('data-count');
        productSelect(apple[index].img, apple[index].text);

    });


    /*
    doc.querySelector('.iphone').addEventListener('click',function () {

        productSelect(apple[0].img, apple[0].text);

    });

    doc.querySelector('.ipod').addEventListener('click',function () {

        productSelect(apple[1].img, apple[1].text);

    });
    */

});



















