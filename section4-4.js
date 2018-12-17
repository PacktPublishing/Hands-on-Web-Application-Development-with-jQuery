$(document).ready(function () {
    $("#bgc").change(function () {
        console.log($(this).val());
        $("body").css("background-color", $(this).val());
    });
    $("li").css({
        fontSize: "40px"
        , color: "red"
        , border: "1px solid #ddd"
        , padding: "10px"
        , margin: "20px"
    });
})