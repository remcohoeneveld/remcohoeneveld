$(window).on("scroll", function () {
    if ($(this).scrollTop() > 800) {
        $(".bg-dark").addClass("fixed");
        $("#content").addClass("pushed");
    }
    else {
        $(".bg-dark").removeClass("fixed");
        $("#content").removeClass("pushed");
    }
});