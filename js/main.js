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

  $(".gl-slide-desc a").on("click", function(e){
    e.preventDefault();
    $($(this).attr('href')).fadeIn();
    $("body").css("overflow","hidden");
  });

  $(".pop-up-close").on("click", function(e){
    e.preventDefault();
    $(this).parents(".gl-post-popup").fadeOut().removeClass("open");
    $("body").css("overflow","auto");
  });

  $(".gl-main-nav a").on("click", function(e) {
    e.preventDefault();
    var blockOffset = $($(this).attr('href')).offset().top;
    $('body,html').animate({scrollTop: blockOffset}, 800);
    // $(".gl-main-nav a").removeClass("active");
    // $(this).addClass("active");
  });
});