$(document).ready(function () {
    var url = "https://api.myjson.com/bins/1d1ubq";
    $("#btn1").click(function () {
        $.ajax({
            url: url
            , dataType: 'json'
            , success: (function (data) {
                console.log("success");
                $.each(data.projects, function (key, value) {
                    $("#output").append(value.name + " " + value.output + "<br> ");
                })
            })
        }).done(function (data) {
            console.log("done");
        }).fail(function (data) {
            console.log("fail");
        }).always(function (data) {
            console.log("always");
        })
    })
    
})