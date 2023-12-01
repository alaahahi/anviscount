



// var bannerSl = new Swiper(".bannerSl", {
//     slidesPerView: 1,
//     spaceBetween: 1,
//     speed: 900,
//     loop:true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     }
// });
// var parentOpinionSl = new Swiper(".parentOpinionSl", {
//     slidesPerView: 1,
//     spaceBetween: 50,
//     speed: 900,
//     loop:true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     }
// });
// var clientsSl = new Swiper(".clientsSl", {
//     slidesPerView:7,
//     spaceBetween: 15,
//     autoplay:true,
//     speed: 600,
//     loop:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 3,
//         spaceBetween: 5,
//       },
//       540: {
//         slidesPerView: 4,
//       },
//       768: {
//         slidesPerView: 5,
//       },
//       1023: {
//         slidesPerView: 6,
//       },
//       1200: {
//         slidesPerView: 7,
//       }

//   },
// });

// function animateNumbers() {
//     const numElements = document.querySelectorAll(".num");
//     numElements.forEach(element => {
//       const targetValue = parseInt(element.textContent);
//       let counter = 0;
  
//       const animate = () => {
//         const step = Math.ceil(targetValue / 50); // Change the number of steps as needed
//         counter += step;
//         if (counter >= targetValue) {
//           element.textContent = targetValue;
//         } else {
//           element.textContent = counter;
//           requestAnimationFrame(animate);
//         }
//       };
  
//       animate();
//     });
//   }
  
//   function isSectionVisible(element) {
//     const scrollPos = window.scrollY;
//     const sectionTop = document.querySelector(element).offsetTop;
//     const sectionHeight = document.querySelector(element).offsetHeight;
//     const sectionBottom = sectionTop + sectionHeight;
//     return sectionTop <= scrollPos + window.innerHeight && sectionBottom >= scrollPos;
//   }
  
//   // Check if the section is visible on page load
//   document.addEventListener("DOMContentLoaded", function () {
//     if (isSectionVisible(".num")) {
//       animateNumbers();
//     }
//   });
  
//   // Check if the section becomes visible while scrolling
//   function onScroll() {
//     if (isSectionVisible(".numBox")) {
//       window.removeEventListener("scroll", onScroll); // Unbind the scroll event after animating on page load
//       animateNumbers();
//     }
//   }
  
//   window.addEventListener("scroll", onScroll);