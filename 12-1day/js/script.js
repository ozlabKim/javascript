$(document).ready(function () {

    // 어떤상황일때 기능 구현할꺼냐
    // 유저가 스크롤을 했을때 그 시점 언잔냐를 따져서 그시점에 맞는 기능을 구현해준다.
    // 행위 -> 유저 행동 -> 이벤트 -> 스크롤 -> scroll();

    $(window).on('scroll', function () {
        // 1. 현재 스크롤의 위치를 실시간으로 알아야한다.
        var nowScroll = $(this).scrollTop();

        // console.log(nowScroll);

        if( nowScroll >= 200) {
            $('nav').addClass('fixed');
        } else  {
            $('nav').removeClass('fixed');
        }

        // 스크롤이 각 섹션에 들어가게 되면 그 섹션에 맞춰 A태그의 배경이 바뀐다.
        $('nav li').removeClass('on');

        if( nowScroll >= 200 && nowScroll < 1000) {
            $('nav li').eq(0).addClass('on');
            // $('nav li').eq(0).slingins().removeClass('on'); // 나를 기준으로 양쪽태그 삭제
        }

        if( nowScroll >= 1000 && nowScroll < 1800) {
            $('nav li').eq(1).addClass('on');
        }

        if( nowScroll >= 1800 && nowScroll < 2600) {
            $('nav li').eq(2).addClass('on');
        }

        if( nowScroll >= 2600 && nowScroll < 3400) {
            $('nav li').eq(3).addClass('on');
        }

        if( nowScroll >= 3400 && nowScroll < 4200) {
            $('nav li').eq(4).addClass('on');
        }
    });

    // 클릭
    $('nav a').on('click', function (e) {

        e.preventDefault(); // 태그가 가지고 있는 속성을 무시, A태그의 #을 막기

        // 1. 몇번째 태그를 클릭했냐?
        var tag = $(this).parent().index();

        // 2. 그 태그 순서와 같은 section 태그를 선택해줘야한다.
        var section = $('section').eq(tag);

        // 3. 그 순서와 같은 section 태그에 위에서 부터 얼마나 내려와 있는 태그인지?
        var settionPos = section.position().top; // 1000

        $('html, body').animate({ scrollTop : settionPos});


        console.log(navList);

    });
});
