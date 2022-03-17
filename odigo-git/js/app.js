//app
(function (){
function showInfo(num,BenefitsTitle,BenefitsText){
    document.querySelectorAll('.benefits__title')[num].innerHTML += `${BenefitsTitle}`;
    document.querySelectorAll('.benefits__text')[num].innerHTML += `${BenefitsText}`;
}
showInfo(0,itemBeneits1.title,itemBeneits1.text);
showInfo(1,itemBeneits2.title,itemBeneits2.text);
showInfo(2,itemBeneits3.title,itemBeneits3.text);
})();
(function (){
    function  showInfo(num,VisitTitle,VisitText){
        document.querySelectorAll('.visit__city')[num].innerHTML += `${VisitTitle}`;
        document.querySelectorAll('.visit__text')[num].innerHTML += `${VisitText}`;
    }
    showInfo(0,itemVisit1.title,itemVisit1.text);
    showInfo(1,itemVisit2.title,itemVisit2.text);
    showInfo(2,itemVisit3.title,itemVisit3.text);
    showInfo(3,itemVisit4.title,itemVisit4.text);
    showInfo(4,itemVisit5.title,itemVisit5.text);
    showInfo(5,itemVisit6.title,itemVisit6.text);
})();

