$(window).on("scroll", function () {
    if ($(this).scrollTop() > $("#header-banner").height()) {
        $(".bg-dark").addClass("fixed");
        $("#content").addClass("pushed");
    }
    else {
        $(".bg-dark").removeClass("fixed");
        $("#content").removeClass("pushed");
    }
});