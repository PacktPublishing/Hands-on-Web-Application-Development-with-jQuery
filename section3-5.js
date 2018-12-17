$(document).ready(function () {
    $("input[type='checkbox']").on("change", updateH);
})

function updateH() {
    $("h1").toggleClass("red");
    var temp = $("input[type='checkbox']").prop("checked");
    console.log(temp);
    $("button").prop('disabled', true);
    $("input[type='checkbox']").prop("checked") ? $("button").prop('disabled', true) : $("button").prop('disabled', false);
}