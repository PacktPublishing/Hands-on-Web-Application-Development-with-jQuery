$(document).ready(function () {
    $("li").click(function () {
        $(this).hide(2000, function () {
            $(this).next().css("color", "red");
            $(this).show();
        })
    })
})