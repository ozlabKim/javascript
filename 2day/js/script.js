
$(document).ready(function () {

    // $('.box').on('click', function () {
    //     alert('a');
    // })

    // 비교연산잔
    // true, false

    /*
        == 같다
        같지 않다.
        === 정말같다 엄격한 조건 ( 자료형 타입 )
        !== 정말 같지 않ㅇ
        > , < 크다 또는 작다
    */


    //논리연산자

    /*
         논리연산자
         && 그리고 (and)
         || 또는 (or)
         ! 부정의 의미논리연산자
     */

    console.log(!true);
    console.log(!false);

    console.log ( 10 > 5 );
    console.log ( 10 < 5 );

    console.log ( 10 >= 10 );

    console.log ('논리연산자');

    // 두개 이상의 조건이 모두 true 여야 true 반환한다.
    console.log ( 10 > 8 && 10 > 9 && 10 > 3 && 10 < 5);
    // 두개 이상의 조건중 하나라도 true 이면 true 반환한다.
    console.log ( 10 > 8 || 10 > 9 || 10 > 3 || 10 < 5);


    // 조건문 if
    // true false
    // if( 조건 ) {조건이 참(true) 일 경우에만 실행한다.}


    if(!false){
        // alert('구매완료')
    }


    var money = 500;
    money = money + 100;
    money = money + 100;
    money = money + 100;
    money = money + 100;
    money = money + 100;
    money = money + 100;

    /*
        R석 : 1000
        S석 : 700
        일반석 : 500
    */

    // if ( money >= 500 && money < 700 ) {
    //     alert('일반석을 구매할 수 있습니다');
    // }
    // if ( money >= 700 && money < 1000 ){
    //     alert('일반석 또는 S석을 구매할 수 있습니다');
    // }
    // if ( money >= 1000) {
    //     alert('일반석 또는 S석 또는 R석을 구매할 수 있습니다.');
    // }


    // if ( money >= 500 && money < 700 ) {
    //     alert('일반석을 구매할 수 있습니다');
    // } else if( money >= 700 && money < 1000 ){
    //     alert('일반석 또는 S석을 구매할 수 있습니다');
    // } else if( money >= 1000) {
    //     alert('일반석 또는 S석 또는 R석을 구매할 수 있습니다.');
    // } else {
    //     alert('돈이 부족합니다.');
    // }


    // if ( 700 <= money ){
    //     money = money - 700;
    //     alert('거스름돈이 ' + money + '원 남았습니다');
    // } else {
    //     alert('돈이 부족합니다.')
    // }




    // 회원가입 시스템템
    // validation check (값체크)
    $('#register').on('click',function () {
        // 1. 아이디 비밀번호 비밀번호확인 란에 내용이 있나?
        // var user_id = $('#user_id').val();
        // var user_pass = $('#user_id').val();
        // var user_pass_confirm = $('#user_id').val();
        // var user_tel = $('#user_id').val();
        // var user_email = $('#user_id').val();

        var doc = document;
        var user_id = doc.getElementById('user_id').value;
        var user_pass = doc.getElementById('user_pass').value;
        var user_pass_confirm = doc.getElementById('user_pass_confirm').value;
        var user_tel = doc.getElementById('user_tel').value;
        var user_email = doc.getElementById('user_email').value;

        if (!user_id){
            alert('아이디를 입력해 주세요.');
            doc.getElementById('user_id').focus();
            return;
        }

        if (!user_pass || !user_pass_confirm) {
            alert('비밀번호를 입력해 주세요.');
            return;
        }

        // 2. 비밀번호는 8자리 이상이여야하고 비밀번호 확인과 일치해야 한다.
        if (user_pass.length < 8) {
            alert('비밀번호는 8자리 이상 입력해 주세요.');
            doc.getElementById('user_pass').value = '';
            doc.getElementById('user_pass_confirm').value = '';
            doc.getElementById('user_pass').focus();
            return;
        }

        if (user_pass != user_pass_confirm) {
            alert('비밀번호가 다릅니다.');
            return;
        }

        // 3. 전화번호(숫자 이메일(이메일형식)
        // 정규표현식
        var regNumber = /^[0-9]*$/;
        if (!regNumber.test(user_tel)) {
            alert('전화번호는 숫자만 가능합니다.');
            return;
        }

        var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
        if (!regExp.test(user_email) && user_email) {
            alert('이메일형식이 아닙니다.');
            return;
        }

        if (user_id && user_pass && user_pass_confirm) {
            alert('회원가입이 완료 되었습니다.');
        }

        // console.log(user_id);
        // console.log(user_pass);
        // console.log(user_pass_confirm);
        // console.log(user_tel);
        // console.log(user_email);
    });


    // 또다른 조건문
    // switch case 문

    /*
        switch(값){값에 따른 케이스별 동작을 하게 된다.}
    */

    $('#select').on('click',function () {
        var color = $('#color').val();
        var doc = document;
        var change = doc.querySelector('.result');

        switch(color) {
            case "red":
                // 제이쿼리
                $('.result').css('background',color);
                // 자바스크립트
                // change.style.background = color; // 동작
                break;
            case "green":
                change.style.background = color;
                break;
            case "blue":
                change.style.background = color;
                break;
            default:
                // 위 값들이 아닌 모든 경우
                change.style.background = 'black';
                break
        }
    })

    // 반복문
    // document.write(1);
    // document.write(1);
    // document.write(1);
    // document.write(1);
    // document.write(1);

    // for 문
    // for(초기값;조건;증감){ 조건이 틀리때까지 실행}

    for (var i = 2; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            var multipy = i * j;
            document.write(i + "x" + j + "=" + multipy + "<br>");
        }
    }

});
























