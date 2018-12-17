$(document).ready(function () {
    var a = 0;
    $("h1").data("foo", "Hello World " + a);
    $("h1 , li").click(function () {
        a++;
        console.log($(this).data("foo"));
        $("h1").data("foo", "Hello World " + a);
        if ($(this).data("foo").first) {
            console.log($(this).data("foo"));
            $(this).data("foo").a++;
            $(this).text("Clicked: " + $(this).data("foo").a);
        };
    });
    $("li").data("foo", {
        first: "first"
        , second: "second"
        , a: 100
    });
})