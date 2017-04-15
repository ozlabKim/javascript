$(document).ready(function(){
    $('.slickSlider').slick({

    });

    $('.next').on('click',function(){
        $('.slickSlider').slick('slickNext');
    });
    $('.prev').on('click',function(){
        $('.slickSlider').slick('slickPrev');
    });
    $('.page li').on('click',function(){

        // 해당 순번과 같은 곳으로 이동하게 해줘야 한다.
        var me = $(this).index();

        $('.show').slick('slickGoTo',2,false);
    });
});

/*

    플러그인

    메이저급

    1. 옵션 - 슬라이드 속도 갯수 시간 자동실행
    2. 메소드 - 기능 페이지넘기는 기능 다음페이지넘기는 기능
    3. 콟백함수, API = 슬라이드 움직이기전에 할일 움직인 후 동작

*/

