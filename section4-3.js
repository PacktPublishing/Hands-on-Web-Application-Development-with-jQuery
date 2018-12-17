$(document).ready(function () {
    $("li, button").click(function(e){
        e.preventDefault();
        console.log(e);
        console.log(this);
        console.log($(this).text());
    })
})