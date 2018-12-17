var myArray = [1, 2, 3, 4];
var myObj = {};
$(document).ready(function () {
    $("button").click(function (e) {
        e.preventDefault();
        console.log($("input[name=first]").val());
        console.log($("#myForm").serialize());
        console.log($("#myForm").serializeArray());
        var tempArray = $("#myForm").serializeArray();
        $.each(tempArray, function (key, val) {
            console.log(key, val);
            myObj[val.name] = val.value;
        })
        console.log(myObj);
    })
})