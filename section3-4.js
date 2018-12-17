$(document).ready(function () {
    $("#myId").prev().css("backgroundColor", "red");
    $("img").nextAll().css("backgroundColor", "blue");
    $("li").siblings().css("backgroundColor", "green");
    $("#myId").parents().css("color", "purple");
})