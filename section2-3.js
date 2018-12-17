$(document).ready(function(){
    $("li").on("click",function(){
        console.log("True");
    })
    $("h1").hover(function(){
        console.log("hover");
        $(this).toggleClass("red");
    });
    $("p#myId").click(function(){
        console.log("clicked");
    });

})