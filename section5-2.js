$(document).ready(function () {
    $("#btn1").click(function () {
        $("ul").slideUp(1000);
    })
    $("#btn2").click(function () {
        $("ul").slideDown(1000);
    })
    $("#btn3").click(function () {
        $("ul").slideToggle(1000,function(){
            console.log("complete");
        });
    })
})