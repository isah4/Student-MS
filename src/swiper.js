const swiperJs = () => {
    var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next.hero-btn",
          prevEl: ".swiper-button-prev.hero-btn",
        },
      });
}

export default swiperJs;