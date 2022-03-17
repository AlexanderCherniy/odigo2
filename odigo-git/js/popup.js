const popupLinks = document.querySelectorAll('.popup-link'); //получаем ссылки которые
const body = document.querySelector('body') // будут открывать попап
const lockPadding = document.querySelectorAll('.lock-padding');  //блокируем отступы

let unlock = true;
const timeout = 800; // ставишь тоже время что и в scss

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (element) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            element.preventDefault();
        });
    }
}

const popupCloseIcons = document.querySelectorAll('.popup__closed'); //получаешь объекты
for (let index = 0; index < popupCloseIcons.length; index++){ // при нажатии на которые 
    const popupCloseIcon = popupCloseIcons[index]; //будет закрываться попап
    popupCloseIcon.addEventListener('click', function(element) {
        popupClose(popupCloseIcon.closest('.popup'));
        element.preventDefault();
    });        
}

function popupOpen(curentPopup){
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open'); //попап открывается
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (element) {
            if (!element.target.closest('.popup__content')) {
                popupClose(element.target.closest('.popup'))
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true){
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock){
            bodyUnLock();
        }
    }
}

function bodyLock() {  //блокируем отсупы чтобы не было скачка
    const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';
    
    for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    } 
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock__body');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
 }

 function bodyUnLock(){
    setTimeout(function() {
    for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
    } 
    body.style.paddingRight = '0px';
    body.classList.remove('lock__body');
    }, timeout)

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
 }

 //close popup with esc
 document.addEventListener('keydown', function (element) { //при нажатии на escape
    if (element.which === 27) { //попап закрывается
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
 });


class User{
    constructor(model){
        this.model = model;
    }
}
let itog = new User(887)
console.log(itog);
class megaUser extends User{
    constructor(leq,model){
        super(model);
        this.leq = leq;
    }
}

let itog2 = new megaUser(7767,645)
console.log(itog2);