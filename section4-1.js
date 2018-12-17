$(document).ready(function () {
    $("h1").hide(2000);
    $("button").click(function (e) {
        e.preventDefault();
        $("h1").hide("slow").delay(2000).show(300);
    })
})