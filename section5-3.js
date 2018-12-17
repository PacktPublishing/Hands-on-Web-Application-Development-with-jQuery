$(document).ready(function () {
    $("#btn1").click(function () {
        $("ul").fadeIn(1000);
    });
    $("#btn2").click(function () {
        //$("ul").fadeOut(1000);
        $("ul").fadeTo(2000,0.5);
    });
    $("#btn3").click(function () {
        $("ul").fadeToggle(1000,function(){
            console.log("complete");
        });
    });
})