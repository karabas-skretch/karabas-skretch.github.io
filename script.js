let text1 = document.querySelector('.text1');
let div1 = document.querySelector('.img-text1');
function showText1(){
    text1.style.zIndex = 2;
    text1.style.opacity = 1;
}
function hideText1(){
    text1.style.zIndex = -1;
    text1.style.opacity = 0;
}
div1.addEventListener('mouseenter', showText1);
div1.addEventListener('mouseleave', hideText1);

let text2 = document.querySelector('.text2');
let div2 = document.querySelector('.img-text2');
function showText2(){
    text2.style.zIndex = 2;
    text2.style.opacity = 1;
}
function hideText2(){
    text2.style.zIndex = -1;
    text2.style.opacity = 0;
}
div2.addEventListener('mouseenter', showText2);
div2.addEventListener('mouseleave', hideText2);

let text3 = document.querySelector('.text3');
let div3 = document.querySelector('.img-text3');
function showText3(){
    text3.style.zIndex = 2;
    text3.style.opacity = 1;
}
function hideText3(){
    text3.style.zIndex = -1;
    text3.style.opacity = 0;
}
div3.addEventListener('mouseenter', showText3);
div3.addEventListener('mouseleave', hideText3);

let text4 = document.querySelector('.text4');
let div4 = document.querySelector('.img-text4');
function showText4(){
    text4.style.zIndex = 2;
    text4.style.opacity = 1;
}
function hideText4(){
    text4.style.zIndex = -1;
    text4.style.opacity = 0;
}
div4.addEventListener('mouseenter', showText4);
div4.addEventListener('mouseleave', hideText4);

let text5 = document.querySelector('.text5');
let div5 = document.querySelector('.img-text5');
function showText5(){
    text5.style.zIndex = 2;
    text5.style.opacity = 1;
}
function hideText5(){
    text5.style.zIndex = -1;
    text5.style.opacity = 0;
}
div5.addEventListener('mouseenter', showText5);
div5.addEventListener('mouseleave', hideText5);

window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}
let animElemets2 = document.querySelectorAll('.my-anim-right');
if (animElemets2.length > 0) {
    for (let i = 0; i < animElemets2.length; i++) {
        let item = animElemets2[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right')
        })
        myAnimScroll(item, 'activ-anim-right');
    }
}
function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

}
let animElemets1 = document.querySelectorAll('.my-anim-left');
if (animElemets1.length > 0) {
    for (let i = 0; i < animElemets1.length; i++) {
        let item = animElemets1[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left')
        })
        myAnimScroll(item, 'activ-anim-left');
    }
}
let animElemets3 = document.querySelectorAll('.my-anim-right1');
if (animElemets3.length > 0) {
    for (let i = 0; i < animElemets3.length; i++) {
        let item = animElemets3[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right1')
        })
        myAnimScroll(item, 'activ-anim-right1');
    }
}
let animElemets4 = document.querySelectorAll('.my-anim-left1');
if (animElemets4.length > 0) {
    for (let i = 0; i < animElemets4.length; i++) {
        let item = animElemets4[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left1')
        })
        myAnimScroll(item, 'activ-anim-left1');
    }
}
let animElemets5 = document.querySelectorAll('.my-anim-right2');
if (animElemets5.length > 0) {
    for (let i = 0; i < animElemets5.length; i++) {
        let item = animElemets5[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right2')
        })
        myAnimScroll(item, 'activ-anim-right2');
    }
}
let animElemets6 = document.querySelectorAll('.my-anim-left2');
if (animElemets6.length > 0) {
    for (let i = 0; i < animElemets6.length; i++) {
        let item = animElemets6[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left2')
        })
        myAnimScroll(item, 'activ-anim-left2');
    }
}