/*var swiper = new Swiper(".slider", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });*/
  var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });