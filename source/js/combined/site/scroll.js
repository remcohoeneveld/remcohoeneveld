$(window).on("scroll", function () {

    // Add parralax effect.
    var moving__background = $(".header-background");
    if ($(this).scrollTop() > 800) {
        $(".bg-dark").addClass("fixed");
        $("#content").addClass("pushed");
    }
    else {
        $(".bg-dark").removeClass("fixed");
        $("#content").removeClass("pushed");
        moving__background.css({"transform": "translate3d(0px, " + $(this).scrollTop() / 2 + "px, 0px)"});
    }
});