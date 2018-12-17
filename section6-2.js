$(document).ready(function () {
var url = "https://api.myjson.com/bins/1d1ubq";
    $("#btn1").click(function(){
        $("#output").load(url,function(){
            console.log("done");
        });
    })
})

