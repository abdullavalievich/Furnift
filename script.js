const nav = document.querySelector("nav");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  nav.classList.toggle("open-nav");
  toggle.classList.toggle("open-nav");
});

// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});