var modalSearch = document.querySelector(".slide-panel");
var closeButton = document.querySelector(".header-opener__btn");
var openButton = document.querySelectorAll(".header-opener__btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("slide-panel--on");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("slide-panel--on");
    }
  });
}

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});
