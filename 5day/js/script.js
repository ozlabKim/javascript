// 자바스크립트 선택자

var doc = document; // <- 객체


/*
var sel1 = doc.getElementById('item');

// console.log(sel1);
// 사용자의 행위를 catch 해야죠
// 이벤트

sel1.addEventListener('mouseover',function () {

    //sel1.classList.add('add');
    this.classList.add('add');

});



// 다양한 선택자
// 아이디, 클래스, 태그,

var sel2 = doc.getElementsByTagName('div');
// 복수형태의 선택자는 그 종류를 배열형태로 넣는다.

// console.log(sel2.length);
// console.log(sel2[0]);


sel2[1].addEventListener('click',function () {

    this.classList.add('add');

});


var sel3 = doc.getElementsByClassName('item');

// console.log(sel3[2]);

sel3[2].addEventListener('click',function () {

    this.classList.add('add');

});


var sel4 = doc.querySelectorAll('.item');

console.log(sel4);

sel4[3].addEventListener('click',function () {

    this.classList.add('add');

});

*/

var ulTag = doc.querySelector('.parent');
var liTag = ulTag.getElementsByClassName('box');
var func = function () {
    this.classList.add('add');
}


// console.log(liTag);


// liTag[0].addEventListener('click',function () {
//     this.classList.add('add');
// });
//
// liTag[1].addEventListener('click',function () {
//     this.classList.add('add');
// });


for(var i=0; i<liTag.length; i++){
    // liTag[i].addEventListener('click',func);
};



// 제이쿼리

$('.parent li:nth-child(3)').on('click', function(){

    $(this).addClass('add');

});


// 선택자 나를 기준으로 부모, 자식, 형제를 찾는 방법이 존재한다.
// parent, child, siblings



var parent = doc.querySelector('.parent');
var child = parent.childNodes;

console.log(child);

var jparent = $('.parent');
var jchild = jparent.children();

console.log(jchild);



// 제이쿼리

































