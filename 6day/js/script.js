//제이쿼리

$(document).ready(function () {

    // 선택자

    /*

        parent - 내 바로 위에 태그
        parents - 내 위쪽으로 태그 전부다 혹은 선택
        this - 나
        childen - 내 바로 아래 태그
        find - 내 아래쪽으로 태그 필수 선택
        siblings - 내 형제


     */

    // $('.inner2').parents('.box1').addClass('black');
    // $('.box1').children('.inner2').addClass('black');
    // $('.box1').find('.inner2').addClass('black');
    // $('.inner2').siblings().addClass('black');
    // $('.inner2').parents('.box1')
    // $('.inner2').parents().parents().children('.inner1').siblings('.inner').addClass('black');


});



// 전자계산기

var doc = document;
var btn = doc.querySelector('.button').getElementsByTagName('button');

for (var i=0; i<btn.length; i++) {
    btn[i].addEventListener('click',function () {

        var data = this.innerHTML;


        if (data >= 0 && data <= 9) {
            numFunc(data);
        } else if (data == 'c') {
            resetFunc();
        } else if (data == '=') {
            resFunc();
        } else {
            calFunc(data);
        }

    });
}


function numFunc(number) {
    // console.log(number + '숫자입니다')

    var dog = doc.getElementById('inner');
    // dog.value = dog.value + number;
    dog.value += number;

}

function calFunc(cal) {

    var giho = doc.getElementById('status');
    var result = doc.getElementById('result');
    var dog = doc.getElementById('inner');

    giho.value = cal;

    result.value = Number(result.value) + Number(dog.value);
    dog.value = '';
}

function resFunc() {

}

function resetFunc() {

}

