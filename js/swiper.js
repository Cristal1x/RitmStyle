const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
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

});