$(document).ready(function () {


    //반복문

    // for (var i = 2; i < 10; i+2) { //스코프(scope) - 영역
    //
    //     for (var j = 1; j < 10; j++) {
    //         var multipy = i * j;
    //         document.write(i + "x" + j + "=" + multipy + "<br>");
    //     }
    //     document.write("<br>")
    //     i++
    // }

    // 여러가지 반복문
    // while
    // do while


    // while(조건){조건이 참이면 계속 실행}
    // 무한루프


    var num = 0;

    // while(num < 10) {
    //
    //     document.write(num);
    //
    //     num++;
    // }

    /*
    do {
        document.write(num);
        num++;
    } while(num < 10);
    */


    // 배열 객체 (데이터 == 자료) / JSON
    // 함수

    // 변수 -> 값을 하나개념자료형을 담을 때 사용한다.
    // 배열 -> 값을 담기위함, 순서가 존재한다. 여러개를 담을 수 있다.
    // 객체 -> 값을 담기위함, 순서가 없다 여러개를 담을 수 있다. key값 고유 이름, 정보덩어리

    // 배열 - array, arr
    // index -> 시작이 0부터 시작한다.
    var op = 10;
    var array = [10, '안녕', 20, true, function (){}];


    // console.log(op);
    // console.log(array[1]);

    // 배열 값 추가 삭제 수정 // 자료구조
    // stack & queue
    // queue - 메신저 기능

    var number = [10, 20, 30, 40, 50];

    // console.log(number);

    number.pop(); // stack 개념으로 데이터를 뺄때 사용
    number.pop();
    number.push(100);
    number.shift();

    // 지정해서 한다 // [20, 30, 100]
    number[5] = 200; // 추가
    number[2] = 300; // 수정

    // console.log(number)

    var money = [];
    // var money = [100, 500, 1000, 50, 100];
    // var total = money[0] + money[1] + money[2] + money[3];
    var total = 500;
    document.getElementById('total').innerHTML = total;

    $('#btn').on('click', function () {

        var doc = document;
        var poc = doc.getElementById('pocket').value;

        money.push(poc);

        total = total + Number(money[money.length-1]);
        var a = new Date();

        console.log(a + Number(money[money.length-1]));
        // for(var i=0; i < money.length; i++){
        //     total = total + Number(money[i]);
        // }

        doc.getElementById('total').innerHTML = total;
    });

    /*
    for(var i=0; i < money.length; i++){
        total = total + money[i];
    }
    */

    // document.write('잔액 : ' + total + '원');

    // var da = [ [10, 20], [50, 60] ];
    // var total = da[0][0] + da[1][1]
    //     console.log(total); // 70

    // 객체
    // 순서가 없다 key(애칭 이름)
    // object -> 정보의 덩어리

    var obj = {a:10, b:'안녕', c:true} // a: key 10 value

    console.log(obj.a);
    console.log(obj.b);

    obj.d = 40; // 추가
    console.log(obj.d);


    var opp = { a:{a1:10, a2:20}, b:{b1:50, b2:60} };

    var total = opp.a.a1 + opp.b.b1;

    console.log(total);


    //퀴즈
    var quiz = [{a:20, b:30},{c:100, d:120}];
    var complete = quiz[0].b + quiz[1].c;

    console.log(complete); //130


    // 순서
    // 객체 정보

    // JSON
    // restfull





})

