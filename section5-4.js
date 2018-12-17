$(document).ready(function () {
    $("#btn1").click(function () {
        $("h1").animate({
            left: "20px"
            , fontSize: "30px"
            , top: "500px"
        }, 5000, animateDone)
    })
    $("#btn2").click(function () {
        $("h1").animate({
            left: '+=50'
            , top: '-=100'
        }, 500, animateDone)
    })
    $("li").click(function () {
        $(this).animate({
            fontSize: '30px'
            , left: '+=10'
        })
    })
})

function animateDone() {
    console.log("done");
}