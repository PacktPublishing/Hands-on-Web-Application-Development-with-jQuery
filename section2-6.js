$(window).scroll(function () {
    console.log("Scrolling");
    var temp = $(window).scrollTop() + $(window).height();
    if (temp >= $(document).height()) {
        console.log("at bottom");
    }
})