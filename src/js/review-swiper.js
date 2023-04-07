// let sliderToShow = 1;
// if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
//   sliderToShow = 2;
// }
// if (document.body.clientWidth >= 1200) {
//   sliderToShow = 3;
// }

// let spaceBetweenSliders = document.body.clientWidth < 768 ? 0 : 28;

// var swiper = new Swiper('.swiper-rew', {
//   slidesPerView: sliderToShow,
//   spaceBetween: spaceBetweenSliders,

//   pagination: {
//     el: '.swiper-pagination-review',
//     clickable: true,
//   },
// });



const swiper = new Swiper('.swiper-rew', {
// Default parameters
slidesPerView: 1,
spaceBetween: 28,
// Responsive breakpoints
breakpoints: {
// when window width is >= 375px
375: {
slidesPerView: 1,
spaceBetween: 28
},
// when window width is >= 768px
768: {
slidesPerView: 2,
spaceBetween: 28
},
// when window width is >= 1200px
1200: {
slidesPerView: 3,
spaceBetween: 28
}
},
// Pagination
pagination: {
el: '.swiper-pagination-review',
clickable: true,
},
});

