// $(document).ready(function(){
//     $('.carusel__inner').slick(
//         {
//             speed: 1200,
//             // adaptiveHeight: true,
//             prevArrow: '<button type="button" class="slick-prev"><img src="icons/red_left.png"></button>',
//             nextArrow: '<button type="button" class="slick-next"><img src="icons/red_right.png"></button>',
//             responsive: [
//                 {
//                     breakpoint: 992,
//                     settings: {
//                       arrows: false,
//                       dots: true
//                     }
//                 }
//             ]

//           }
//     );
//   });
  
const slider = tns({
  container: '.carusel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navPosition: 'bottom'
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});