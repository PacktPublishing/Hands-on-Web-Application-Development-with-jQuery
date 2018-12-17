$(document).ready(function () {
    $("li:first").css("color","red");
    $("li").first().css("color","blue");
    
    $("li:last").css("color","purple");
    $("li").last().css("color","green");
    
    $("li:odd").css("backgroundColor","yellow");
    $("li:eq(2)").css("backgroundColor","red");
    $("li:nth-child(2)").css("backgroundColor","blue");
    
    $("li").eq(4).css("fontSize","24px");
    
})