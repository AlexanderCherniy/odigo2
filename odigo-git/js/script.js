'use strict';
 // js script
(function (){
let body = document.getElementsByTagName('body')[0] //заблокировать скролл когда меню работает
let menu = document.getElementById('menu')
let burger = document.getElementById('burger')
burger.onclick = function (event) {
    burger.classList.toggle('activeBurger') // добавляем или убираем классы по нажатию
    menu.classList.toggle('activeBurger')
    body.classList.toggle('lockBurger')
    let linkHeader = document.querySelectorAll('.headerlist__li')
    for (let i = 0; i < linkHeader.length; i++) {
        linkHeader[i].onmousedown = () => {
            burger.classList.remove('activeBurger')
            menu.classList.remove('activeBurger')
            body.classList.remove('lockBurger')
        }
    }
}
const header = document.querySelector('.header')
window.onscroll = () => {
    if (window.pageYOffset > 750) {
        header.style.background = 'rgba(21, 24, 36, 0.6)';
        header.style.padding = '16px 0 16px 0';
    } else {
        header.style.background = 'transparent'
        header.style.padding = '32px 0 32px 0';
    }
}
}());


//spoiler

(function (){
let navName = document.querySelectorAll('.link-title'); // получаешь объект при нажатии на который будет появляться контент
navName.forEach(navName => { // цикл чтобы повесить событие для каждого
    navName.addEventListener('click', event => { // вешаем событие
        let navCurrectActive = document.querySelector('.link-title.active'); //эффект аккордеона,
        if (navCurrectActive && navCurrectActive !== navName) { //когда открыто больше 1ой 
            navCurrectActive.classList.toggle('active'); //вкладки преведущая закрывается
            navCurrectActive.nextElementSibling.style.maxHeight = 0;
        }
        navName.classList.toggle('active'); //добавляем / убираем active
        let navUls = navName.nextElementSibling; // получаем следующий элемент
        if (navName.classList.contains('active')) { //проверяем есть ли класс active
            navUls.style.maxHeight = navUls.scrollHeight + 'px'; //получаем нужную высоту контента
        } else {
            navUls.style.maxHeight = 0; // обнуляем если нет active
        }
    });
});
}());

//like
(function (){
let likes = document.querySelectorAll('.visit__like')
likes.forEach(likes => {
    likes.addEventListener('click', function likePlus() {
        likes.classList.toggle('likeActive')
        if (likes.classList.contains('likeActive')) {
            let summLike = 222
            this.innerHTML = summLike++ + '<svg width="16" fill="red" height="15" viewBox="0 0 16 15"  xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M8 15L6.84 13.921C2.72 10.1035 0 7.58583 0 4.49591C0 1.9782 1.936 0 4.4 0C5.792 0 7.128 0.662125 8 1.70845C8.872 0.662125 10.208 0 11.6 0C14.064 0 16 1.9782 16 4.49591C16 7.58583 13.28 10.1035 9.16 13.9292L8 15Z"/>' +
                '</svg>'
        } else {
            let summLike = 221
            this.innerHTML = summLike-- + '<svg width="16" fill="white" height="15" viewBox="0 0 16 15"  xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M8 15L6.84 13.921C2.72 10.1035 0 7.58583 0 4.49591C0 1.9782 1.936 0 4.4 0C5.792 0 7.128 0.662125 8 1.70845C8.872 0.662125 10.208 0 11.6 0C14.064 0 16 1.9782 16 4.49591C16 7.58583 13.28 10.1035 9.16 13.9292L8 15Z"/>' +
                '</svg>'
        }
    })
})
}());


//links header

function linksHeader(get, num, to) {
    document.querySelectorAll(get)[num].onmouseup = ()=> {
        document.querySelector(to).scrollIntoView({
            block: 'center', inline: 'center', behavior: 'smooth',
        })
    }
};
document.querySelectorAll('.headerlist__logo')[0].addEventListener('mousedown', () => {
    linksHeader('.headerlist__logo', 0, '.discover')
})
document.querySelectorAll('.headerlist__li')[0].addEventListener('mousedown', () => {
    linksHeader('.headerlist__li', 0, '.temples')
})
document.querySelectorAll('.headerlist__li')[1].addEventListener('mousedown', () => {
    linksHeader('.headerlist__li', 1, '.visit')
})
document.querySelectorAll('.headerlist__li')[2].addEventListener('mousedown', () => {
    linksHeader('.headerlist__li', 2, '.videos')
})


//animations


const animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for(let i = 0;i<animItems.length;i++){
            const animItemHeight = animItems[i].offsetHeight;
            const animItemOffset = offset(animItems[i]).top;
            let animItemStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animItemStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animItemStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItems[i].classList.add('active');
            } else animItems[i].classList.remove('active');
        };
    };
    setTimeout(()=>{
        animOnScroll();
    },300);
    animOnScroll();
    function offset(element) {
        const rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top:rect.top + scrollTop,left:rect.left + scrollLeft}
    }
}


//showAllText
const learn = document.querySelectorAll('.benefits__learn')
const learnImg = document.querySelector('.arrowBenefits')
console.log(learnImg);
for(let i = 0;i<learn.length;i++){
    learn[i].addEventListener('click',()=>{
        const benefitsText = document.querySelectorAll('.benefits__text')
        benefitsText[i].classList.toggle('showAllText')
        if(benefitsText[i].classList.contains('showAllText')){
            learn[i].innerHTML = 'CLOSE -';
        } else learn[i].innerHTML = 'LEARN MORE +';
    })
}