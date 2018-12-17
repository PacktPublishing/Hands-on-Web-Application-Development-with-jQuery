$(document).ready(function () {
    var url = "https://api.myjson.com/bins/1d1ubq";
    $("#btn1").click(function () {
        $.get(url, function (data) {
            console.log(data);
        })
    })
    $("#btn2").click(function () {
        $.getJSON(url, function (data) {
            console.log(data);
            $.each(data.projects, function (key, value) {
                $("#output").append(value.name + " " + value.output + "<br> ");
            })
        })
    })
})