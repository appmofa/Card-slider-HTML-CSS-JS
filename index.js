
const swiper = new Swiper('.swiper', {
  
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//  Coding By Mostafa - www.Webmah.com 
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
