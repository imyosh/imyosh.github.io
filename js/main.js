/*==================== PORTFOLIO SWIPER  ====================*/

window.setupPortfolioSwiper = () => {
  let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
}

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper(".testimonial__container", {
//   grabCursor: true,
//   loop: true,
//   spaceBetween: 48,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   breakpoints: {
//     568: {
//       slidesPerView: 2,
//     },
//   },
// })
