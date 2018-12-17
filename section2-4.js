$(document).ready(function(){
    $("h1").mouseenter(function(){
        $(this).addClass("red");
    });
    $("h1").mouseout(function(){
        $(this).removeClass("red");
    });
    
    $("li").on({
        mouseenter:function(){
            console.log("over");
        },
        mouseleave:function(){
           console.log("leave"); 
        },
        click:function(){
            console.log("li");
        }
    
    })
    
})