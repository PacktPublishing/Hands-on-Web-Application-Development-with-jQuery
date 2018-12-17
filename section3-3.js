$(document).ready(function () {
    $("#myId span").css("color","red");
    $("li:last").prev().css("color","blue");
    
    $("li").has("span").css("backgroundColor","purple");
    $("li").filter(".yellow").css("backgroundColor","yellow");
    $("div").find("span").css("fontSize","24px");
    
})