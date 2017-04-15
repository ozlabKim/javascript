$(document).ready(function () {


    // $('.gnb li').animate({top:0},200);
    $('.gnb li').each(function(index){

        $(this).delay(index * 100).animate({top: 0}, 2000, 'easeOutElastic');

    });

    // $('gnb li').on('mouseenter', function () {
    //     $(this).children('h2').addClass('on');
    // })
    //
    // $('gnb li').on('mouseleave', function () {
    //     $(this).children('h2').addClass('on');
    // })


    $('gnb li').on('mouseenter mouseleave', function () {
        $(this).children('h2').toggleClass('name',200);
    })


});