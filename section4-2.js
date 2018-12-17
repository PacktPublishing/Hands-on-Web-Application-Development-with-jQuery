$(document).ready(function () {
    $one = $("<div>One</div>");
    $two = $("<div>Two</div>");
    $("#tester1").append($one);
    $two.appendTo($("#tester2"));
    $("h1").empty();
    $("h1").html("jQuery");
    $("h1").text("jQuery");
    $("#myId").before("BEFORE");
    $("#myId").after("AFTER");
    $("#myId").prepend("PREPEND");
    $("#myId").append("APPEND");
    $("button").click(function () {
        //$("ul").append("<li>some Content</li>");
        var $li = $("<li/>");
        $li.text("New Item");
        $("ul").append($li);
    })
})