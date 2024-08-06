$(document).ready(function () {
    $('.js-slick').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      draggable: false,
      fade: true,
      speed: 1000
    });
    
    $('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides).removeClass('is-animating');
    });
    
    $('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides.get(currentSlide)).addClass('is-animating');
    });
  });