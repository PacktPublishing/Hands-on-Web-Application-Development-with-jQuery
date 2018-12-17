
$(document).ready(function(){
    $("li").click(function(){
        console.log($(this).text());
        $(this).toggleClass("red");
    })
    $("a").click(function(e){
        e.preventDefault();
        $(this).css("color","red");
    })
    $("input[name=first]").change(function(){
        console.log("changed");
    })
    $("li").off("click");
})
