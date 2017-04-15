$(document).ready(function () {


    start_move();

    // 사용자가 필터의 종류를 변경할때
    $('.filter input').on('change', filter);


});

function filter() {

    // 체크박스에 지금현재 체크가 되어 있는 상태냐? 안되어 있는 상태냐?
    var check = this.checked; // true, false (키고 꺼진상태)

    var content = document.querySelectorAll('.card');
    for (var k = 0; k < content.length; k++) {
        content[k].style.display = 'block';
        content[k].classList.add('show');
        content[k].classList.remove('hide');
    }

    // 기능
    var option = document.querySelectorAll('.option');

    for (var i = 0; i <= option.length; i++) {
        if (i == option.length) {
            start_move();
            break;
        }

        var optionChecked = option[i].checked;
        var optionValue = option[i].value;

        if (optionChecked) {
        } else {
            var card = document.querySelectorAll('.' + optionValue);
            for (var j = 0; j < card.length; j++) {
                card[j].style.display = 'none';
                card[j].classList.add('show');
                card[j].classList.remove('hide');

            }
        }
    }

}

// 항상 카드를 배치 시켜 주는 역할을 한다.
function start_move() {

    var content = document.querySelector('.content'); // 카드를 가지고 있는 부모
    var card = document.querySelectorAll('.card'); // 카드 5개 선택 (배열 - 노드리스트)

    for (var i = 0; i < card.length; i++) {

        var x = (i % 5) * 210;
        var y = parseInt(i/5) * 110;

        card[i].style.top = y + 'px';
        card[i].style.left = x + 'px';
    }
}