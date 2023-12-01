var prdetRelSl = new Swiper(".prdetRelSl", {
    slidesPerView:4,
    spaceBetween: 30,
    autoplay:true,
    speed: 600,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
});