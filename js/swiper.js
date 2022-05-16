const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    1000: {
      slidesPerView: 2,
      
    },
    1920: {
      slidesPerView: 3,
      
    },
  }

});