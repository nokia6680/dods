/*Скрипт плавного перемещения по якорям*/

$(document).ready(function(){
   $("#page-header").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

/*Скрипт слайдера Swiper*/

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 45,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 45
    },

    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45
    },

    1920: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 45
    },
  },
});

/*Скрипт кнопки-открывалки*/
/*
var navMain = document.querySelector('.header-nav__wrapper');
var navToggle = document.querySelector('.header-nav__toggle');

navMain.classList.remove('header-nav__wrapper--nojs');

document.addEventListener('keydown', function (e) {
  if(e.keyCode === 27) document.getElementById('header-nav__wrapper').hidden= 1;
});

navToggle.addEventListener('click', function()  {
  if (navMain.classList.contains('header-nav__wrapper--closed')) {
    navMain.classList.remove('header-nav__wrapper--closed');
    navMain.classList.add('header-nav__wrapper--opened');
  } else {
    navMain.classList.add('header-nav__wrapper--closed');
    navMain.classList.remove('header-nav__wrapper--opened');
  }
});
*/

var headerWrap = document.querySelector(".header-nav");
var navToggle = document.querySelector(".header-nav__toggle");
var navMain = document.querySelector('.header-nav__wrapper');

headerWrap.classList.remove("header-nav--nojs");
navToggle.classList.remove("header-nav__toggle--nojs");
navMain.classList.remove("header-nav__wrapper--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("header-nav__wrapper--closed")) {
    navMain.classList.remove('header-nav__wrapper--closed');
    navMain.classList.add('header-nav__wrapper--opened');
  } else {
    navMain.classList.add('header-nav__wrapper--closed');
    navMain.classList.remove('header-nav__wrapper--opened');
  }
});

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("header-nav__toggle--closed")) {
      navToggle.classList.remove("header-nav__toggle--closed");
      navToggle.classList.add("header-nav__toggle--open");
  } else {
      navToggle.classList.add("header-nav__toggle--closed");
      navToggle.classList.remove("header-nav__toggle--open");
  }
});
