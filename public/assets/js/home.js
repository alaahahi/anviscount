var acridtnSl = new Swiper(".acridtnSl", {
    slidesPerView: 3,
    speed: 900,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".acridtnSlArr2",
      prevEl: ".acridtnSlArr1",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
});
var reviesl = new Swiper(".testiSl", {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: true,
  spaceBetween: 15,
  navigation: {
    nextEl: ".testiSlArr2",
    prevEl: ".testiSlArr1",
  },
  pagination: {
    el: ".testipagination",
    clickable:true,
  },
});