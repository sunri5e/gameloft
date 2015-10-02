$(document).ready(function(){
  $('.gl-slider').bxSlider({
  	controls: true
  });
  $('.gl-vacancies-slider').bxSlider({
  	controls: true,
  	slideWidth: 240,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 65,
    pager: false
  });
});