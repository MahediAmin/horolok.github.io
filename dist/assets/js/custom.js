"use strict";

/*
* ----------------------------------------------------------------------------------------
    Template Name: mr stater
    Template URI: https://spellbit.com/
    Description: 
    Author: mahedi amin
    Author URI: https://mahediamin.com
    Version: 1.0.0



    -------------INDEX----------------
   01.Mobile Menu
   02.Sticky Menu
   03.All Owl Slider
   04.Offcanvas
   05. Counter
   06. scroll up
   07. Magnify active
   08. Preloder Active
   09. WOW Active
   10. PROGRESSBAR ACTIVATION
   11. Tooltip activation
   12. ui activation
   13. Filter Acitve
   14. Select Two Activation
   15. Paralx Init

* ----------------------------------------------------------------------------------------
*/
!function ($) {
  "use strict";

  $('.rt-btn').on('mouseenter', function (e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;

    if ($(this).find('.btn-revel-effects ')) {
      $('.rt-btn .btn-revel-effects ').css({
        top: relY,
        left: relX
      });
    }
  });
  $('.rt-btn').on('mouseout', function (e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;

    if ($(this).find('.btn-revel-effects ')) {
      $('.rt-btn .btn-revel-effects ').css({
        top: relY,
        left: relX
      });
    }
  });

  if ($(".rt-slider-active").length > 0) {
    $('.rt-slider-active').slick({
      slidesToShow: 1,
      autoplay: false,
      fade: true,
      dots: false,
      arrows: false,
      infinite: true
    }).slickAnimation();
  }

  if ($(".t-active").length > 0) {
    $('.t-active').slick({
      slidesToShow: 1,
      autoplay: false,
      dots: false,
      infinite: true
    });
  }

  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: false,
      // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)

    });
    wow.init();
  }

  $(".single-rt-banner").mousemove(function (e) {
    parallaxIt2(e, ".img-1", 40);
    parallaxIt2(e, ".img-2", -40);
    parallaxIt2(e, ".img-3", 20);
    parallaxIt2(e, ".img-4", -20);
  });

  function parallaxIt2(e, target, movement) {
    var $this = $(".single-rt-banner");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
}(jQuery);