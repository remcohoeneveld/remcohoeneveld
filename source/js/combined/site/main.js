/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function ($) {

  $(document).ready(function () {
    // Add parralax effect.
    var moving__background = $(".header-background");
    $(window).scroll(function () {
      moving__background.css('top', ($(window).scrollTop()) / 2);
    });
  });

  /*---------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */
  $(window).load(function () {

    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      $("#wrapper").css('opacity', '1');
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });

  });

  $(".service-block ").click(function () {
    var $this = $(this);
    $this.toggleClass('service-block-active');
  });


})(jQuery);