// ------------------navbar--------------------------------
let nav = document.getElementById('navbar');
let scroll = document.getElementById('scroll');
const nav_show = () => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0);
};
const scroll_up = () => {
    scroll.classList.toggle('scroll-up', window.scrollY > 300);
};
scroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
window.addEventListener('scroll', nav_show);
window.addEventListener('scroll', scroll_up);
// --------------------------------------------------------
let ham1 = document.getElementById('ham1');
let ham2 = document.getElementById('ham2');
let menu = document.getElementById('menu');
let account = document.getElementById('account');
ham2.addEventListener('click', () => {
    ham2.firstElementChild.classList.toggle('fa-times')
    account.classList.toggle('show');
});
ham1.addEventListener('click', () => {
    ham1.firstElementChild.classList.toggle('fa-times')
    menu.classList.toggle('show');
    account.classList.toggle('show');
});
// ----------------------lastest features---------------------------------
var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
//------------------------------trending ads-------------------------------------
var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ----------------------------------------------------------