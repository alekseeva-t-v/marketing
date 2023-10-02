import mixitup from 'mixitup';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

$(function () {
  var mixer = mixitup('.portfolio__content');
  Fancybox.bind('[data-fancybox]', {});
});
