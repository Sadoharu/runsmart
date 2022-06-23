$(document).ready(function(){
    $('.carusel__inner').slick(
        {
            speed: 1200,
            // adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/red_left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/red_right.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      arrows: false,
                      dots: true
                    }
                }
            ]

          }
    );
  });
  
          