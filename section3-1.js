$(document).ready(function () {
    $("h1").click(function () {
        $(this).css("color", "red");
    });
    $(".myClass").css("color", "blue");
    $("#myId").css("color", "green");
    $("li a").css("color", "purple");
    $("input[name=first]").css({
        backgroundColor: "yellow"
        , color: "blue"
        , fontSize: "24px"
    });
})