// language toggle button start
const ar = document.querySelector(".ar");
const en = document.querySelector(".en");
const lang = document.querySelector("body");
const dir = document.querySelector("html");
// en.addEventListener('click', function(){
//     ar.classList.add('active');
//     lang.classList.add('ltr');
//     en.classList.remove('active');
//     dir.setAttribute('dir','ltr');
//     localStorage.setItem('ltr','true')
// })
// ar.addEventListener('click', function(){
//     en.classList.add('active');
//     lang.classList.remove('ltr');
//     ar.classList.remove('active');
//     dir.setAttribute('dir','rtl')
//     localStorage.removeItem('ltr')
// })
// if(localStorage.getItem('ltr') == "true"){
//     ar.classList.add('active');
//     lang.classList.add('ltr');
//     en.classList.remove('active');
//     dir.setAttribute('dir','ltr');
// }
// language toggle button end
// *********************************************************************************** //

window.addEventListener("scroll", function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector(".header");
    if (scroll >= 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// sticky header end
// *********************************************************************************** //

const hdrBox3NavListbtn = document.querySelector(".hdrBox3NavListbtn");
const navlistCloseBtn = document.querySelector(".navlistCloseBtn");
const navlist = document.querySelector(".navlist");
// hdrBox3NavListbtn.addEventListener('click', function(event){
//     navlist.classList.toggle('active');
//     event.stopPropagation();
// })
// navlistCloseBtn.addEventListener('click', function(event){
//     navlist.classList.remove('active');
//     event.stopPropagation();
// })
// document.querySelector('body').addEventListener('click', function(){
//     navlist.classList.remove('active');
// })