$(document).ready(function () {

    // JSON
    // 통신을 함에 있어서 보기 쉬운 형태로 만들어 서로 주고 받자.

    var aclass = {
        count:5,
        student:[
            { name:'조인성', age:'30' },
            { name:'이병헌', age:'34' },
            { name:'황정민', age:'40' },
            { name:'현빈', age:'35' },
            { name:'송승헌', age:'32' }
        ]
    }

    var k = 1;

    for(i=0; i < aclass.count; i++){

        var tableTd1 = $('<td></td>');
        var tableTd2 = $('<td></td>');
        var tableTd3 = $('<td></td>');
        var tableTr = $('<tr></tr>');

        tableTd1.text(k);
        if ( i == 4 ) { // 예외의 상황
            tableTr.addClass('good');
        }
        tableTd2.text(aclass.student[i].name);
        tableTd3.text(aclass.student[i].age);

        tableTr.append(tableTd1).append(tableTd2).append(tableTd3);
        $('#pyo tbody').append(tableTr);

        k++;
    }


    // 함수
    // 함수형 언어
    // 기능 단위
    // 모듈

});