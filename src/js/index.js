import mixitup from 'mixitup';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

$(function () {
  var mixer = mixitup('.portfolio__content');
  Fancybox.bind('[data-fancybox]', {});

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/arrow-right.svg"></button>',
  });
});
