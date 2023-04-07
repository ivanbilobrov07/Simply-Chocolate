// let sliderToShow = 1;
// if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
//   sliderToShow = 2.46;
// }
// if (document.body.clientWidth >= 1200) {
//   sliderToShow = 3;
// }

// let spaceBetweenSliders = document.body.clientWidth < 768 ? 0 : 19;

// var swiper = new Swiper('.swiper-review-card', {
//   slidesPerView: sliderToShow,
//   spaceBetween: spaceBetweenSliders,

//   pagination: {
//     el: '.swiper-pagination-review',
//     clickable: true,
//   },
// });

// const sliderWrapper = document.querySelector('.slider__wrapper');
// let isDown = false;
// let startX;
// let scrollLeft;

// sliderWrapper.addEventListener('mousedown', e => {
//   isDown = true;
//   startX = e.pageX - sliderWrapper.offsetLeft;
//   scrollLeft = sliderWrapper.scrollLeft;
// });

// sliderWrapper.addEventListener('mouseleave', () => {
//   isDown = false;
// });

// sliderWrapper.addEventListener('mouseup', () => {
//   isDown = false;
// });

// sliderWrapper.addEventListener('mousemove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - sliderWrapper.offsetLeft;
//   const walk = x - startX;
//   sliderWrapper.scrollLeft = scrollLeft - walk;
// });

let sliderToShow = 1;
if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
  sliderToShow = 2.46;
}
if (document.body.clientWidth >= 1200) {
  sliderToShow = 3;
}

let spaceBetweenSliders = document.body.clientWidth < 768 ? 0 : 19;

var swiper = new Swiper('.swiperw', {
  slidesPerView: sliderToShow,
  spaceBetween: spaceBetweenSliders,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


