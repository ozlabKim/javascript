$(document).ready(function () {

    var name = ["yellow","black","red","pink","violet","prussian"];
    var select = [$(".yellow"),$(".red"),$(".black"),$(".pink"),$(".violet"),$(".prussian")];

    var num = 0;

    larva();

    $('.next').on('click',function () {
        num++;
        if(num > 5) {
         num = 0;
        }
        larva();
    });

    $('.prev').on('click',function () {
        larva();
    });

    function larva() {
        $('.card li').animate({ top : 20 }, 300);
        $('.card img').fadeIn();
        select[num].animate({ top : 0 }, 300);
        $('.name span').text(name[num]);
        select[num].children('img').fadeOut();
    }

});