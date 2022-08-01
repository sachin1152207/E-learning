var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay:{
      delay: 1700
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        435: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        888: {
            slidesPerView: 2,
        },
        1080:{
            slidesPerView: 3
        },
        2000:{
          slidesPerView: 5,
        }
    },
});


navMenu = document.getElementById('.nav-menu')
document.querySelector('section.burger').addEventListener('click', ()=>{
  document.querySelector('.nav-menu').classList.toggle('visible')
})