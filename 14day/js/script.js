$(document).ready(function(){
    $('.slickSlider').slick({speed:3000});

    // API : 기능
    $('.slickSlider').on('afterChange',function (event, slick, currentSilde) {
        /*
        $('.item' + currentSlide).find('p').ep(0).animate({opacity:1,top:0});
        $('.item' + currentSlide).find('p').ep(1).delay(100).animate({opacity:1,top:0});
        $('.item' + currentSlide).find('p').ep(2).delay(200).animate({opacity:1,top:0});
        */

        $('.item' + currentSlide).find('p').each(function (index) {
            $(this).delay(index * 100).animate({opacity:1,top:0});
        });


    })



});
