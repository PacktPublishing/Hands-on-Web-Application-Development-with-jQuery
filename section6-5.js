var str = "        hello world        ";
console.log($.trim(str));
var myArray = [1, 2, 3, 4, 5];
$.each(myArray, function (index, value) {
    console.log(index, value);
});
if ($.inArray(7, myArray) == -1) {
    console.log("7 is not in the array");
}
$(document).ready(function () {})