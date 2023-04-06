let sliderToShow = 1;
if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
  sliderToShow = 2.46;
}
if (document.body.clientWidth >= 1200) {
  sliderToShow = 4;
}

let spaceBetweenSliders = document.body.clientWidth < 768 ? 0 : 19;

var swiper = new Swiper('.swiper', {
  slidesPerView: sliderToShow,
  spaceBetween: spaceBetweenSliders,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
