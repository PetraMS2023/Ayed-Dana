var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    370: {
      slidesPerView: 1.5,
    },
    520: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
  },
});
