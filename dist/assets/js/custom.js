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
      dots: true,
      infinite: true
    }).slickAnimation();
  }
}(jQuery);