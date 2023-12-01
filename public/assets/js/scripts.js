window.addEventListener("scroll", function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector(".header");

    if (scroll >= 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});



const hdrbtn = document.querySelector('.hdrbtn');
const mblLst__close = document.querySelector('.mblLst__close');
const mblLst = document.querySelector('.mblLst');
hdrbtn.addEventListener('click', function(event){
    mblLst.classList.toggle('active');
    event.stopPropagation();
});
mblLst.addEventListener('click', function(event){
    event.stopPropagation();
});
mblLst__close.addEventListener('click', function(){
    mblLst.classList.remove('active');
});
document.querySelector('body').addEventListener('click', function(event){
    mblLst.classList.remove('active');
})
// 
// language toggle button start
const ar = document.querySelector(".ar");
const en = document.querySelector(".en");
const lang = document.querySelector("body");
const dir = document.querySelector("html");
en.addEventListener('click', function(){
    ar.classList.add('active');
    lang.classList.remove('rtl');
    en.classList.remove('active');
    dir.setAttribute('dir','ltr')
    localStorage.removeItem('rtl')
})
ar.addEventListener('click', function(){
    en.classList.add('active');
    lang.classList.add('rtl');
    ar.classList.remove('active');
    dir.setAttribute('dir','rtl');
    localStorage.setItem('rtl','true')
})
if(localStorage.getItem('rtl') == "true"){
    en.classList.add('active');
    lang.classList.add('rtl');
    ar.classList.remove('active');
    dir.setAttribute('dir','rtl');
}
// language toggle button end
// *********************************************************************************** //
AOS.init({
	offset: 90,
	duration: 900,
	once:true,
});
