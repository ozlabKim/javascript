// $('.sunban li').on('click', function () {
//
//     $(this).children('img').fadeOut();
//
// });


var doc = document;

var ulTag = doc.querySelectorAll('.sunban'); // [1,2]
var liTag1 = ulTag[0].getElementsByTagName('li'); // [1,2,3,4,5,6]
var liTag2 = ulTag[0].getElementsByTagName('li'); // [7,8,9,10,11,12]

for ( var  i=0; i<ulTag.length; i++) {

    var liTag = ulTag[i].getElementsByTagName('li');

    for ( var j=0; j<liTag.length; j++) {

        liTag[j].addEventListener('click',function () {

            var me = this;
            var num = 1;

            // 애니메이션 - 페이드 한 동작 (사라지는)
            var a = setInterval(function () {

                if ( num < 0) {
                    clearInterval(a);
                }

                me.style.opacity = num;
                num = num - 0.1;
            },10);

        });
    }
}
