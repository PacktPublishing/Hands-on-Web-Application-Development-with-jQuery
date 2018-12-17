$(document).ready(function () {
    $("input[name=first]").keydown(function (e) {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            console.log("Enter pressed");
        }
    });
    $("input[name=first]").keyup(function (e) {
        console.log(e.keyCode);
    });
    $("input[name=first]").keypress(function (e) {
        console.log("key press");
    })
})