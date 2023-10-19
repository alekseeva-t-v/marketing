import mixitup from 'mixitup';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

$(function () {
  Fancybox.bind('[data-fancybox]', {});

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./img/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./img/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.portfolio__content');
});
