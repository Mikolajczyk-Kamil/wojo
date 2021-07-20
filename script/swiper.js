const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 800,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    modifier: 1,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
