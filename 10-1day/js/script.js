$(document).ready(function () {


    // 속성 컨트롤
    // 제이쿼리 값 확인
    $('.doll li').on('click', zoom);
    
    function zoom() {

        // attr < attribute 속성
        // attr('속성명','속성값'); > 추가, 변경
        // attr('속성명'); > 확인
        var imgSrc = $(this).children('img').attr('src');
        console.log(imgSrc);    //img/doll_01.jpg
                                //img/doll_01_zoom.jpg
        // replace > 찾아바꾸기 기능
        // replace('검색할내용,'바꿀내용')
        // var zoomImg = imgSrc.replace('.png','_zoom.png');

        // split 구분자로 문자를 나눈다
        var zoomImg = imgSrc.split('.');
        // ['img/doll_01', 'jpg']
        var completImg = zoomImg[0] +  "_zoom." + zoomImg[1];

        var makeImg = $('<img>').attr('src',completImg); // <> 넣으면 태그 생성
        //$('div.zoom').empty();
        $('div.zoom').empty().append(makeImg); // 한줄로 변경
        // <img src="주소">
        // $('div.zoom').children('img').attr('src',zoomImg)
    }


});