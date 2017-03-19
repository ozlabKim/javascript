// 전역공간

$(document).ready(function () {

    // 지역공간

    // js 애니메이션 5:5 css 애니메이션

    // js 애니메이션 vs css 애니메이션
    /*
        1. 문법이 다르다
        2. css는 브라우저의 자체 그래픽을 사용해서 동작하기 때문에 훨씬 부드럽다.(모바일)
        3. 낮은버전의 브라우저에서 css 애니메이션이 잘 동작하지 않을때 대비
     */

    /*
    $('button').on('click',function () {

        // animate 메소드
        // $('.exam1').animate({left:200},1000);
        // $('.exam1').animate({marginLeft:200},'slow');

        // toggle // 스위치 // o or 1
        // $('.exam1').animate({height:'toggle'},'slow');

        // $('.exam1').animate({left:200},1000);
        // $('.exam1').animate({
        //     width:200,
        //     left: 200
        // },1000, function () {
        //     $('.exam2').animate({left:200},1000);
        // });

        $('.exam1').animate({left:'+=200'},1000);
    });
    */

    // slider

    // 사용자의 option
    var slider_option = 1000; //.slider 넓이
    var count_option = 4; // 디스플레이 시킬 상품 갯수
    var speed_option = 200;

    // 초기 세팅값
    var li_count = $('.watch li').length;
    var li_width = slider_option/count_option; // li의 넓이
    var ul_width = li_width * li_count;


    $('.slider').css('width', slider_option);
    $('.watch').css('width', ul_width);
    $('.watch li').css('width', li_width);

    var btn = function () {
        var check_class = $(this).attr('class');

        if (check_class == 'next') {
            $('.watch').animate({left:'-='+li_width},speed_option,end)
        } else if (check_class == 'prev') {
            $('.watch').animate({left:'+='+li_width},speed_option,end)
        }
    };

    // 기능정의
    var end = function () {

        var ul_left_position = $('.watch').position().left;
        var move_check = -(ul_width - slider_option)

        if (ul_left_position < move_check) {
            $('.watch').animate({left:move_check},speed_option)
        } else if (ul_left_position > 0) {
            $('.watch').animate({left:0},speed_option)
        }
    }

    // 사용자의 이벤트
    $('.next').on('click', btn);
    $('.prev').on('click', btn);


});